import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>チャットルーム</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/14845056/pexels-photo-14845056.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
            <span>しゅーへい</span>
            <button>ログアウト</button>
        </div>
    </div>
  )
}

export default Navbar