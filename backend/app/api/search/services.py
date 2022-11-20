from fastapi import Depends, status
from sqlalchemy.ext.asyncio import AsyncSession
from core.processing.process import Process


class SearchService:
    async def search(self, query):
        # Instantiate processing class
        process = Process(query)
        # Call main method
        response = await process.main()
        # Save query to history
        # Return results
        return response
