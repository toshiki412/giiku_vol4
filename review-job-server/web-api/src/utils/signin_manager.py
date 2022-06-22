import hashlib
from typing import Optional
import config
from model import User
from sqlalchemy.orm import Session


def hash(password: str):
    return hashlib.sha256(bytes(password, 'utf-8') + bytes(config.solt, 'utf-8')).hexdigest()


def check_password(password: str, user: User):
    return hash(password) == user.password


def check_token(token, user: User):
    return token == user.password


def get_user(token, id, db: Session) -> Optional[User]:
    user = db.get(User, id)
    if(user is not None and check_token(token, user)):
        return user
    else:
        return None
