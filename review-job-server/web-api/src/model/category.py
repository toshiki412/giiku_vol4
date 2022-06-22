from db import Base
from sqlalchemy import Column
from sqlalchemy.sql.sqltypes import String, BigInteger


class Category(Base):
    __tablename__ = 'categories'
    id = Column('id', BigInteger, primary_key=True, index=True)
    name = Column('name', String, nullable=False)

    def toResultJSON(self):
        return {
            "id": self.id,
            "name": self.name,
        }