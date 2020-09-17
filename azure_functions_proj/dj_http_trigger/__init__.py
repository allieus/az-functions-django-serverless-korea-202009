import sys
sys.path.insert(0, 'dj_proj')

import azure.functions as func
from dj_proj.wsgi import application

wsgi = func.WsgiMiddleware(app=application)

def main(req: func.HttpRequest, context: func.Context) -> func.HttpResponse:
    return wsgi.main(req, context)
