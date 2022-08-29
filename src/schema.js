const { gql } = require("apollo-server");




const typeDefs = gql`
  type Query {
    "Get meals array for homepage grid"
    meals: [Meal]!
    meal(id: ID!): Meal!
    mealsByType(mealtype: MealType): [Meal!]!


    orders: [Order]!
    order(id: ID!): Order!
    orderItems(orderId: ID!): [OrderItem]!
    UserOrder(state: OrderState): [Order]!
    
  }
  
  

  type Mutation{
    
    createMeal(meal: CreateMealInput): Meal
    deleteMeal(id: ID!): String


    createOrder(input: createOrderInput): Order
    deleteOrder(id: ID!): String
    addOrderItem(item: CreateOrderItemInput): OrderItem
    deleteOrderItem(id: ID!): String
  }


  input createOrderInput{
    state: OrderState
  }

  input CreateMealInput{
    title: String!
    description: String!
    price: Int!
    photo: String
    mealtype: MealType
  }


  input CreateOrderItemInput{
    quantity: Int
    mealId: ID
    orderId: ID
  }
  
  type Meal {
    id: ID!
    title: String!
    description: String!
    price: Int!
    photo: String
    mealtype: MealType
  }

  enum MealType{
    Plats
    Entree
    Desserts
    Boissons
  }

  enum OrderState{
    Created
    Pending
    Canceled
    Success
  }

  type Order{
    id: ID!
    total: Int
    state: OrderState
  }

  type OrderItem{
    id: ID!
    quantity: Int
    meal: Meal
    order: Order
  }
  
`;
module.exports = [typeDefs];
