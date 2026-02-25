from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
import models, schemas, crud
from database import engine, SessionLocal

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Blood Bank API")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/donate/")
def create_donor(donor: schemas.DonorCreate, db: Session = Depends(get_db)):
    return crud.create_donor(db=db, donor=donor)

@app.post("/request/")
def create_request(request: schemas.RequestCreate, db: Session = Depends(get_db)):
    return crud.create_request(db=db, request=request)
