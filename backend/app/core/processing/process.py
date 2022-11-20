import asyncio
import time
from core.data.dataclass import DataClass

search_info = {
    "name": "fola",
    "age": 86,
    "occupation": "influencer",
    "email": "fkh@gmail.com",
    "gender": "male",
}


def TwitterSrvfn(search_info):
    return search_info


def FacebookSrvfn(search_info):
    return search_info


def LinkedinSrvfn(search_info):
    return search_info


class Process:
    def __init__(self, search_info):
        self.search_info = search_info

    async def main(self):
        services_response = await self.get_service_response()
        response = DataClass(services_response, **self.search_info)
        data_response = response.initiate()
        return data_response

    async def runService(self, Service):
        return Service(self.search_info)

    async def get_service_response(self):
        twitter_s, facebook_s, linked_s = await asyncio.gather(
            self.runService(TwitterSrvfn),
            self.runService(FacebookSrvfn),
            self.runService(LinkedinSrvfn),
        )

        return [twitter_s, facebook_s, linked_s]


res = Process(search_info)
print(res.main())
x = time.perf_counter()
y = time.perf_counter() - x
print(y)
