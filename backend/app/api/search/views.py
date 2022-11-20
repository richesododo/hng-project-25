from fastapi import APIRouter, HTTPException
from .schemas import SearchResponseSchema
from .services import SearchService

router = APIRouter()


@router.get("/", response_model=SearchResponseSchema)
async def search_vips(
    name: str,
    gender: str = None,
    occupation: str = None,
    age: int = None,
    email: str = None,
):

    try:
        search_service = SearchService()
        resp = await search_service.search(
            {
                "name": name,
                "gender": gender,
                "occupation": occupation,
                "age": age,
                "email": email,
            }
        )

        return resp

    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=500,
            detail="An error occurred while validating VIP",
        )
