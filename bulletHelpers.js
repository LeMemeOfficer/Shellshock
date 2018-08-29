nextId = 0;

function getBulletId()
{
  currentId = nextId;
  nextId++;
  return currentId;
}
