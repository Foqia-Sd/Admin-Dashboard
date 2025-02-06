"use client";

import React from "react";
import BackButton from "@/components/BackButton";
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input";
  import { Textarea } from "@/components/ui/textarea";
  import { Button } from "@/components/ui/button";
  import products from "@/data/products";
  import { useToast } from "@/hooks/use-toast"


  const formSchema = z.object({
    title: z.string().min(1, {
        message: 'Title is required'
    }),
    body: z.string().min(1, {
        message: 'Body is required'
    }),
    brand: z.string().min(1, {
        message: 'Brand is required'
    }),
    date: z.string().min(1, {
        message: 'Date is required'
    })
  });
  
interface ProductEditPageProps {
    params: {
        id: string;
    }

}  

const ProductEditPage = ({ params } : ProductEditPageProps) => {
  const { toast } = useToast();

    const product = products.find((product) => product.id === params.id);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: product?.title || '',
            body: product?.body || '',
            brand: product?.brand || '',
            date: product?.date || '',
        }
    })

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
       toast ({
        title: 'Product has been updated successfully',
        description: `Updated by ${product?.brand} on ${product?.date}`,
       });
    }

  return (
    <>
    <BackButton text="Back to Products" link="/products"/>
    <h3 className="text-2xl mb-4">Edit Product</h3>
    <Form {...form}>
        <form onSubmit={ form.handleSubmit(handleSubmit)} className="space-y-8">

  <FormField
  control={form.control}
  name="title"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Name</FormLabel>
      <FormControl>
        <Input className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible: ring-offset-0" 
        placeholder="Enter Name" {...field} />
      </FormControl>  
      <FormMessage />
    </FormItem>
  )}
/>
  <FormField
  control={form.control}
  name="body"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Body</FormLabel>
      <FormControl>
        <Input className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible: ring-offset-0" 
        placeholder="Enter Body" {...field} />
      </FormControl>  
      <FormMessage />
    </FormItem>
  )}
/>
  <FormField
  control={form.control}
  name="brand"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Buyer</FormLabel>
      <FormControl>
        <Input className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible: ring-offset-0" 
        placeholder="Enter Brand" {...field} />
      </FormControl>  
      <FormMessage />
    </FormItem>
  )}
/>
  <FormField
  control={form.control}
  name="date"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Date</FormLabel>
      <FormControl>
        <Input className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible: ring-offset-0" 
        placeholder="Enter Date" {...field} />
      </FormControl>  
      <FormMessage />
    </FormItem>
  )}
/>

     <Button className="w-full dark:bg-slate-800 dark:text-white">Update Product</Button>

    </form>
    </Form>
    </>
  )
}

export default ProductEditPage