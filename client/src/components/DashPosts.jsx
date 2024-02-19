// import { Modal, Table, Button } from 'flowbite-react';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { HiOutlineExclamationCircle } from 'react-icons/hi';

// export default function DashPosts() {
//   const { currentUser } = useSelector((state) => state.user);
//   const [userPosts, setUserPosts] = useState([]);
//   const [adminPosts, setAdminPosts] = useState([])
//   const [showMore, setShowMore] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [postIdToDelete, setPostIdToDelete] = useState('');



//   const fetchPosts = async () => {
//     if(currentUser.isAdmin === false) {
//          const response = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
//          const data = await response.json();
//          setAdminPosts(data)
//     }
//   }
//   useEffect(() => {
//     const fetchAdminPosts = async () => {
//       try {
//         if(currentUser.isAdmin) {
//           const response = await fetch('/api/post/adminposts');
//           const data = await response.json();
//           setUserPosts(data)
//         }
//         // else {
//         //   const response = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
//         //   const data = await response.json();
//         //   setAdminPosts(data)
//         // }

//       } catch (error) {
//         console.log(error.message);
//       }
//     };

//      fetchAdminPosts();
//      fetchPosts();
//   }, [currentUser._id]);

  

//   const handleShowMore = async () => {
//     const startIndex = userPosts.length;
//     try {
//       const res = await fetch(
//         `/api/post/getposts?userId=${currentUser._id}&startIndex=${startIndex}`
//       );
//       const data = await res.json();
//       if (res.ok) {
//         setUserPosts((prev) => [...prev, ...data.posts]);
//         if (data.posts.length < 9) {
//           setShowMore(false);
//         }
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const handleDeletePost = async () => {
//     setShowModal(false);
//     try {
//       const res = await fetch(
//         `/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
//         {
//           method: 'DELETE',
//         }
//       );
//       const data = await res.json();
//       if (!res.ok) {
//         console.log(data.message);
//       } else {
//         setUserPosts((prev) =>
//           prev.filter((post) => post._id !== postIdToDelete)
//         );
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
//       {userPosts.length || adminPosts ? (
//         <>
//             {currentUser.isAdmin ? adminPosts.map((post)=>{
//                      <Table hoverable className='shadow-md'>
//                      <Table.Head>
//                        <Table.HeadCell>Date updated</Table.HeadCell>
//                        <Table.HeadCell>Post image</Table.HeadCell>
//                        <Table.HeadCell>Post title</Table.HeadCell>
//                        <Table.HeadCell>Category</Table.HeadCell>
//                        <Table.HeadCell>Delete</Table.HeadCell>
//                        <Table.HeadCell>
//                          <span>Edit</span>
//                        </Table.HeadCell>
//                      </Table.Head>
//                <Table.Body className='divide-y'>
//                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
//                  <Table.Cell>
//                    {new Date(post.updatedAt).toLocaleDateString()}
//                  </Table.Cell>
//                  <Table.Cell>
//                    <Link to={`/post/${post.slug}`}>
//                      <img
//                        src={post.image}
//                        alt={post.title}
//                        className='w-20 h-10 object-cover bg-gray-500'
//                      />
//                    </Link>
//                  </Table.Cell>
//                  <Table.Cell>
//                    <Link
//                      className='font-medium text-gray-900 dark:text-white'
//                      to={`/post/${post.slug}`}
//                    >
//                      {post.title}
//                    </Link>
//                  </Table.Cell>
//                  <Table.Cell>{post.category}</Table.Cell>
//                  <Table.Cell>
//                    <span
//                      onClick={() => {
//                        setShowModal(true);
//                        setPostIdToDelete(post._id);
//                      }}
//                      className='font-medium text-red-500 hover:underline cursor-pointer'
//                    >
//                      Delete
//                    </span>
//                  </Table.Cell>
//                  <Table.Cell>
//                    <Link
//                      className='text-teal-500 hover:underline'
//                      to={`/update-post/${post._id}`}
//                    >
//                      <span>Edit</span>
//                    </Link>
//                  </Table.Cell>
//                </Table.Row>
//              </Table.Body>
//              </Table>
//             }) :
//              userPosts.map((post)=>{
//               <Table hoverable className='shadow-md'>
//               <Table.Head>
//                 <Table.HeadCell>Date updated</Table.HeadCell>
//                 <Table.HeadCell>Post image</Table.HeadCell>
//                 <Table.HeadCell>Post title</Table.HeadCell>
//                 <Table.HeadCell>Category</Table.HeadCell>
//                 <Table.HeadCell>Delete</Table.HeadCell>
//                 <Table.HeadCell>
//                   <span>Edit</span>
//                 </Table.HeadCell>
//               </Table.Head>
//               <Table.Body className='divide-y'>
//               <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
//                 <Table.Cell>
//                   {new Date(post.updatedAt).toLocaleDateString()}
//                 </Table.Cell>
//                 <Table.Cell>
//                   <Link to={`/post/${post.slug}`}>
//                     <img
//                       src={post.image}
//                       alt={post.title}
//                       className='w-20 h-10 object-cover bg-gray-500'
//                     />
//                   </Link>
//                 </Table.Cell>
//                 <Table.Cell>
//                   <Link
//                     className='font-medium text-gray-900 dark:text-white'
//                     to={`/post/${post.slug}`}
//                   >
//                     {post.title}
//                   </Link>
//                 </Table.Cell>
//                 <Table.Cell>{post.category}</Table.Cell>
//                 <Table.Cell>
//                   <span
//                     onClick={() => {
//                       setShowModal(true);
//                       setPostIdToDelete(post._id);
//                     }}
//                     className='font-medium text-red-500 hover:underline cursor-pointer'
//                   >
//                     Delete
//                   </span>
//                 </Table.Cell>
//                 <Table.Cell>
//                   <Link
//                     className='text-teal-500 hover:underline'
//                     to={`/update-post/${post._id}`}
//                   >
//                     <span>Edit</span>
//                   </Link>
//                 </Table.Cell>
//               </Table.Row>
//             </Table.Body>
//             </Table>
//             })}
//       </>
//       ) : (
//         <p>You have no posts yet!</p>
//       )}
//       <Modal
//         show={showModal}
//         onClose={() => setShowModal(false)}
//         popup
//         size='md'
//       >
//         <Modal.Header />
//         <Modal.Body>
//           <div className='text-center'>
//             <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
//             <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
//               Are you sure you want to delete this post?
//             </h3>
//             <div className='flex justify-center gap-4'>
//               <Button color='failure' onClick={handleDeletePost}>
//                 Yes, I'm sure
//               </Button>
//               <Button color='gray' onClick={() => setShowModal(false)}>
//                 No, cancel
//               </Button>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

// const handleDeletePost = async () => {
//   setShowModal(false);
//   try {
//     const res = await fetch(
//       `/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
//       {
//         method: 'DELETE',
//       }
//     );
//     const data = await res.json();
//     if (!res.ok) {
//       console.error(data.message);
//     } else {
//       // Remove the deleted post from either userPosts or adminPosts based on the current user's role
//       if (!currentUser || !currentUser.isAdmin) {
//         setUserPosts((prev) =>
//           prev.filter((post) => post._id !== postIdToDelete)
//         );
//       } else {
//         setAdminPosts((prev) =>
//           prev.filter((post) => post._id !== postIdToDelete)
//         );
//       }
//     }
//   } catch (error) {
//     console.error(error.message);
//   }
// };

{/* <Modal
show={showModal}
onClose={() => setShowModal(false)}
popup
size='md'
>
<Modal.Header />
<Modal.Body>
  <div className='text-center'>
    <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
    <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
      Are you sure you want to delete this post?
    </h3>
    <div className='flex justify-center gap-4'>
      <Button color='failure' onClick={handleDeletePost}>
        Yes, I'm sure
      </Button>
      <Button color='gray' onClick={() => setShowModal(false)}>
        No, cancel
      </Button>
    </div>
  </div>
</Modal.Body>
</Modal> */}


import { Modal, Table, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function DashPosts() {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(true); // Define showMore state

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const [userData, adminData] = await Promise.all([
          fetchUserPosts(),
          fetchAdminPosts()
        ]);

        setUserPosts(userData.posts || []);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [currentUser]);

  const handleShowMore = async () => {
    const startIndex = userPosts.length;
    try {
      const res = await fetch(
        `/api/post/getposts?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserPosts((prev) => [...prev, ...data.posts]);
        if (data.posts.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchUserPosts = async () => {
    const response = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
    return response.json();
  };

  const fetchAdminPosts = async () => {
    const response = await fetch('/api/post/adminposts');
    return response.json();
  };

  const handleDeletePost = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.error(data.message);
      } else {
        setUserPosts((prev) =>
          prev.filter((post) => post._id !== postIdToDelete)
        );
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>; // Show loading indicator while fetching posts
  }

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      {Array.isArray(userPosts) && userPosts.length > 0 ? (
        <>
          <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Date updated</Table.HeadCell>
              <Table.HeadCell>Post image</Table.HeadCell>
              <Table.HeadCell>Post title</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className='divide-y'>
              {userPosts.map((post) => (
                <Table.Row
                  key={post._id}
                  className='bg-white dark:border-gray-700 dark:bg-gray-800'
                >
                  <Table.Cell>
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/post/${post.slug}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className='w-20 h-10 object-cover bg-gray-500'
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className='font-medium text-gray-900 dark:text-white'
                      to={`/post/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{post.category}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setPostIdToDelete(post._id);
                      }}
                      className='font-medium text-red-500 hover:underline cursor-pointer'
                    >
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className='text-teal-500 hover:underline'
                      to={`/update-post/${post._id}`}
                    >
                      <span>Edit</span>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className='w-full text-teal-500 self-center text-sm py-7'
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>No user posts available</p>
      )}

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this post?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDeletePost}>
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

