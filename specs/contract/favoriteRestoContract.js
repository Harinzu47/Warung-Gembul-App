const itActsAsFavoriteRestoModel = (RestoFavIdb) => {
  it('should return the resto that has been added', async () => {
    RestoFavIdb.putResto({ id: 1 });
    RestoFavIdb.putResto({ id: 2 });

    expect(await RestoFavIdb.getResto(1)).toEqual({ id: 1 });
    expect(await RestoFavIdb.getResto(2)).toEqual({ id: 2 });
    expect(await RestoFavIdb.getResto(3)).toEqual(undefined);
  });

  it('should refuse a resto from being added if it does not have the correct property', async () => {
    RestoFavIdb.putResto({ aProperty: 'property' });

    expect(await RestoFavIdb.getAllResto()).toEqual([]);
  });

  it('can return all of the resto that have been added', async () => {
    RestoFavIdb.putResto({ id: 1 });
    RestoFavIdb.putResto({ id: 2 });

    expect(await RestoFavIdb.getAllResto()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite resto', async () => {
    RestoFavIdb.putResto({ id: 1 });
    RestoFavIdb.putResto({ id: 2 });
    RestoFavIdb.putResto({ id: 3 });

    await RestoFavIdb.deleteResto(1);

    expect(await RestoFavIdb.getAllResto()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a resto even though the resto has not been added', async () => {
    RestoFavIdb.putResto({ id: 1 });
    RestoFavIdb.putResto({ id: 2 });
    RestoFavIdb.putResto({ id: 3 });

    await RestoFavIdb.deleteResto(4);

    expect(await RestoFavIdb.getAllResto()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestoModel };
