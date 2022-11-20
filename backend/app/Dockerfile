FROM python:3.10.8
#ENV PYTHONCLEAN 1
RUN bash -c "mkdir /backend"
WORKDIR /backend
COPY . /backend
RUN pip install -r requirements/development.txt
EXPOSE 8000
CMD ["python", "server.py"]

