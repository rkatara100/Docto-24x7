import React, { useState } from 'react'
import { assets } from '../../assets/assets';

const MyProfile = () => {

      const [userdata, setUserData] = useState({
            name: "Robert Kalra",
            image: assets.profile_pic,
            email: "kanchi@gmail.com",
            phone: "+1 246 982 4455",
            address: {
                  line1: "A-125 Ransh",
                  line2: "Church Road, Mumbai",
            },
            gender: 'Male',
            dob: '1992-05-20',
      });

      const [isEdit, setIsEdit] = useState(false);

      return (
            < div className='max-w-lg flex flex-col gap-2 text-sm' >

                  <img className='w-36 rounded' src={userdata.image} alt="" />
                  {
                        isEdit ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type='text' value={userdata.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} />
                              : <p className='font-medium text-3xl  text-neutral-800 mt-4'>{userdata.name}</p>
                  }
                  <hr className='bg-zinc-400 h-[1px] border-none' />

                  <div>
                        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
                        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
                              <p className='font-medium'>Email id:</p>
                              <p className='text-blue-500'>{userdata.email}</p>
                              <p className='font-medium'>Phone:</p>
                              {
                                    isEdit ? <input className='bg-gray-100 max-w-52' type='text' value={userdata.phone} onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} /> : <p className='text-blue-400'>{userdata.phone}</p>
                              }

                              <p className='font-medium '>Address:</p>
                              {
                                    isEdit ? <p>
                                          <input className='bg-gray-50 ' type="text" value={userdata.address.line1} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} />
                                          <br />
                                          <input className='bg-gray-50 ' type="text" value={userdata.address.line2} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />
                                    </p> :

                                          <p className='text-gray-500'>
                                                {userdata.address.line1}
                                                <br />
                                                {userdata.address.line2}
                                          </p>
                              }
                        </div>
                  </div>


                  <div>
                        <p className='text-neutral-500 underline mt-3' >BASIC INFORMATION</p>
                        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
                              <p className='font-medium'>Gender:</p>
                              {
                                    isEdit ? <select className='max-w-20 bg-gray-100' value={userdata.gender} onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}>
                                          <option value="Male">Male</option>
                                          <option value="Female">Female</option>

                                    </select> : <p className='text-gray-400'>
                                          {userdata.gender}
                                    </p>
                              }
                              <p className='font-medium'>Birthday:</p>
                              {
                                    isEdit ? <input className='max-w-28 bg-gray-400' type='date' value={userdata.dob} onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} />
                                          : <p className='text-gray-400'>{userdata.dob}</p>
                              }
                        </div>
                  </div>

                  <div className='mt-10'>
                        {
                              isEdit ?
                                    <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all  ' onClick={() => setIsEdit(false)}>Save Information</button> :
                                    <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(true)}>Edit</button>
                        }
                  </div>



            </ div>

      )
}

export default MyProfile
