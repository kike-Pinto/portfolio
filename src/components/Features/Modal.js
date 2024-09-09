import React from 'react'

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-[#575353] p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3'>
        <h2 className='text-2xl font-bold mb-4 text-white px-5'>{title}</h2>
        {/* <div
          className='modal-content text-gray-300 mb-4 p-5'
          dangerouslySetInnerHTML={{ __html: content }}
        /> */}
        <div className='modal-content max-h-96 overflow-y-scroll p-4'>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <button
          className='mx-5 px-8 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200'
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal
