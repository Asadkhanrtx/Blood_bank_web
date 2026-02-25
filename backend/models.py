from sqlalchemy import Column, Integer, String, Boolean, Date
from database import Base

class Donor(Base):
    __tablename__ = "donors"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    dob = Column(Date)
    weight = Column(Integer)
    blood_type = Column(String(10))
    consent = Column(Boolean)

class Request(Base):
    __tablename__ = "requests"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    dob = Column(Date)
    weight = Column(Integer)
    blood_type = Column(String(10))
    consent = Column(Boolean)
