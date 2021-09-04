/** PrismaQuery.js */
/** This component queries Prisma and passes the results to CustomCard */
import { useState, useEffect } from "react"
import axios from 'axios'
import Grid from "@material-ui/core/Grid"
import CustomCard from "./CustomCard"
 
export default function PrismaQuery() {
   /** React state hook to store the items in our Bakeshop store */
   const [items, setItems] = useState([])
 
   /** Prisma API URL  */
   const API_URL="http://localhost:5000/products";
 
   /** React effect hook that queries our Prisma API */
   useEffect(() => {
      /** Declare an asynchronous function to run the query */
      async function fetchPrismaData() {
         /** Use Axios to query the Prisma server and log the response*/
         const response = await axios.get(API_URL)
         console.log(response)
         /** Query the products in our Bakeshop store */
         /** response.data is an array of JSON data */
         setItems(response.data)
      }
      /** Run the query, React forces us to declare a function in useEffect, then call
      *  it separately in order to use async */
      fetchPrismaData()
      /** An empty array means useEffect will only run once, when the page renders */
   }, [])
 
   /** Return the React function component */
   return (
      <div 
      style={{ padding: 10 }}>
         {/** The container Grid item wraps all other Grid items */}
         <Grid
            container
            alignItems="flex-start"
            direction="row"
            spacing={2}
            >
          
            {/** items.map loops through the array of JSON objects and allows us to */
            /** pass our query results into each React component's props */}
            {items.map((item) => (
               /** There is one child Grid item for each CustomCard */
               <Grid
                  item
                  xs={3}>
                  <CustomCard
                     /** Pass the fields from our Prisma query as props to CustomCard */
                     title={item.name}
                     price={item.price}
                     description={item.description}
                     image={item.image}
                     category={item.category}
                     stock={item.stock}
                  />
               </Grid>
            ))}
         </Grid>
      </div>
   )
}