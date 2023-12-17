import os
from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse

app = FastAPI()

@app.get("/file/{file_name}")
def stream_file(file_name: str):
    file_path = os.path.join(os.getcwd(), "./files", file_name)
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found.")

    return StreamingResponse(
        content=load_file_content(file_path=file_path),
        media_type="application/pdf"
    )


def load_file_content(file_path: str):
    with open(file_path, "rb") as file:
        while True:
            chunk = file.read(1024)
            if not chunk:
                break
            yield chunk

