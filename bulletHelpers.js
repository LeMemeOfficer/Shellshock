function counter()
{
  this.id = 0;
  this.getNextId = function ()
  {
    return this.id++;
  }
}
