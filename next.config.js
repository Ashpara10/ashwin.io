/** @type {import('next').NextConfig} */
const { withContentlayer } =require('next-contentlayer')

module.exports=withContentlayer({
    images:{
        domains:["imgs.search.brave.com"],
    }
})


