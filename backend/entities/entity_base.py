"""Abstract superclass of all entities in the application.

There is no reason to instantiate this class directly. Instead, look toward the child classes.
Additionally, import from the top-level entities file which indexes all entity implementations.
"""


from sqlalchemy.orm import DeclarativeBase

class EntityBase(DeclarativeBase):
    pass
