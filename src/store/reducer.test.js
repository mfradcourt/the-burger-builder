import reducer from './reducer';
import * as actionTypes from './actions';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4
    })
  });

  it('should add a new ingredient and adapt the price', () => {
    expect(reducer({
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4
    }, 
    { 
      type: actionTypes.ADD_INGREDIENT,
      ingredientName: 'meat'
    })).toEqual({
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 1
      },
      totalPrice: 5.3
    })
  });

  it('should remove an ingredient and adapt the price', () => {
    expect(reducer({
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 1
      },
      totalPrice: 5.3
    },
    {
      type: actionTypes.REMOVE_INGREDIENT,
      ingredientName: 'meat'
    })).toEqual({
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4
    })
  });
});