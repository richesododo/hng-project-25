import json
import math


class DataClass:
    """
    A dataclass that taskes an array of lists of dictionaries, 
    sort out the data, calculate an average vip score and 
    return unique profile(s)
    """

    def __init__(self, data_list, **kwargs):
        self.kwargs = kwargs
        self.data_list = data_list
         # making sure the argument passed is a list
        if not isinstance(data_list, list):
            return "Error: data list must be a list type"

    def initiate(self):
        # a function that must be called to instantiate the class
        unique_list = self.extract_unique()

        cleaned_data = self.clean(unique_list)

        return cleaned_data

    def extract_unique(self):
        # a function that filters the data list and return the unique result(s)
        converts = []

        new_results = self.filter()

        for obj in new_results:
            converted_dicts = {json.dumps(par) for par in obj}

            converts.append(converted_dicts)

        for item in converts:
            converts[0] |= item

            final = converts[0]

        final = [json.loads(item) for item in final]

        return final

    def get_average_vip_score(self, package):

        scores = [item['vip_score'] for item in package]

        average = sum(scores)/len(package)

        return average

    def clean(self, unique_list):

        clean_list = []

        for item in unique_list:
            pre_list = [
                piece for piece in unique_list if piece['name'] == item['name']]

            item['vip_score'] = self.get_average_vip_score(pre_list)

            item['is_vip'] = True

            item['occupation'] = self.merge_occupations(pre_list)

            item['age'] = self.process_duplicate_age(pre_list)

            clean_list.append(item)

            for obj in unique_list:
                if obj['name'] == item['name']:
                    unique_list.remove(obj)

        return clean_list

    def merge_occupations(self, pre_list):
        # a function that merges the occupation for unique 
        # users from many list(source)
        occupation = []
        for item in pre_list:

            value = item['occupation']

            if isinstance(value, str):
                value = [value]

            occupation.extend(value)

        return set(occupation)

    def process_duplicate_age(self, pre_list):
        # a function that calculates the average possible age
        #  if the age for a user differs per source(list) 

        ages = [int(item['age']) for item in pre_list]

        age = math.ceil(sum(ages)/len(pre_list))

        return age

    def filter(self):

        parameters = list(self.kwargs.values())
        kwargs = self.kwargs

        new_results = []

        for data in self.data_list:

            # initial
            filtered_list = data

            # name_filter
            if kwargs.get('name', ''):
                filtered_list = [
                    item for item in filtered_list if kwargs['name'] in item['name']]

            # gender_filter
            if kwargs.get('gender', ''):
                filtered_list = [
                    item for item in filtered_list if item['gender'] in parameters]

            # age_filter
            if kwargs.get('age', ''):
                filtered_list = [
                    item for item in filtered_list if item['age'] in parameters]

            # occupation_filter
            if kwargs.get('occupation', ''):
                filtered_list = [
                    item for item in filtered_list if kwargs['occupation'] in item['occupation']]

            new_results.append(filtered_list)

        return new_results
