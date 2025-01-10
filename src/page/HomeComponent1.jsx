// eslint-disable-next-line no-unused-vars
import React from 'react'
import books from "../assets/pngimg.com - book_PNG51090.png"
export default function HomeComponent1() {
    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center mb-8">
                Everything You Need to Succeed, All in One Place
            </h2>

            {/* Grid Layout */}
<div className='flex justify-center'>
     <div>

         
            <div className='flex gap-5 rounded-xl'>
                <div className='w-[400px] h-[400px] bg-[#f9bdb5] rounded-xl'>
                    <div className='p-5'>
                        <h3 className="text-xl font-bold mb-4">AI Features</h3>
                        <div className='flex justify-center'>
                            <img className='w-40' src={books} alt="" />
                        </div>
                        <p className='w-56'>
                            Use pre-designed templates or personalize with videos, stickers, text, and more.
                        </p>
                    </div>
                </div>
                <div>
                    <div className='w-[600px]  h-[190px] rounded-xl  bg-[#f94f64] flex items-center justify-between p-5'>
                    <div className='w-56'>
                        <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
                        <p>
                            Schedule all your cards and gifts now, and we’ll send them later.
                        </p>
                    </div>
                    <img className='w-40' src={books} alt="" />
                    </div>
                    <div className='flex gap-5 mt-8'>
                        <div className='w-[290px] h-[180px] border bg-[#c00e01] rounded-xl  flex flex-col-reverse items-center justify-between p-5'>
                        <div className='w-56'>
                        <h3 className="text-xl font-bold mb-4">Smart Messaging</h3>
                        <p>
                        Track your groups, chats, and send cards easily.
                        </p>
                    </div>
                    <img className='w-16' src={books} alt="" />
                        </div>
                        <div className='w-[290px] h-[180px] border bg-[#ff2919] rounded-xl  flex flex-col items-center justify-between p-5'>
                        <div className='w-56'>
                        <h3 className="text-xl font-bold mb-4">Pay-to-View</h3>
                        <p>
                        Access all your gifts and keep your savings intact.
                        </p>
                    </div>
                    <img className='w-16' src={books} alt="" />
                        </div>
                    </div>
                </div>          
            </div>
            <div className='mt-5 flex gap-5'>
            <div className='w-[700px]  h-[190px] rounded-xl  bg-[#f94f64] flex items-center justify-between p-5'>
                    <div className='w-56'>
                        <h3 className="text-xl font-bold mb-4">Advanced Insights</h3>
                        <p>
                        Never miss a milestone or special occasion again.
                        </p>
                    </div>
                    <img className='w-40' src={books} alt="" />
                    </div>
                    <div className='w-[300px] h-[190px] border bg-[#f94f64] rounded-xl  flex flex-col items-center justify-between p-5'>
                        <div className='w-56'>
                        <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
                        <p>
                            Schedule all your cards and gifts now,
                        </p>
                    </div>
                    <img className='w-16' src={books} alt="" />
                        </div>
            </div>
            </div>
</div>
           
        </div>
    )
}
