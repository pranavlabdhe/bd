import { Spinner, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";
import PostCard from "../components/PostCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);
  const [speechUrl, setSpeechUrl] = useState("");
  const [speechUrlLoading, setSpeechUrlLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    if (post) {
      const fetchSpeechUrl = async () => {
        try {
          setSpeechUrlLoading(true);
          // Strip HTML tags from the post content
          const strippedContent = post.content.replace(/<[^>]+>/g, '');
          const res = await fetch(
            "http://localhost:3000/api/textToSpeechfun/textToSpeech",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ text: strippedContent }),
            }
          );
          const data = await res.json();
          if (res.ok) {
            setSpeechUrl(data.audioUrl);
          } else {
            throw new Error(data.error || "Failed to fetch speech URL");
          }
        } catch (error) {
          console.error("Error fetching speech URL:", error);
        } finally {
          setSpeechUrlLoading(false);
        }
      };
      fetchSpeechUrl();
    }
  }, [post]);

  const playAudio = () => {
    const audioElement = document.getElementById("post-audio");
    if (audioElement) {
      audioElement.play();
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl mt-10 p-3 text-center post_font website_font max-w-2xl mx-auto lg:text-4xl">
        {post && post.title}
      </h1>
      <Link
        to={`/search?category=${post && post.category}`}
        className="self-center mt-5"
      >
        <Button color="gray" pill size="xs">
          {post && post.category}
        </Button>
      </Link>

      {!speechUrl || speechUrlLoading ? (
        "Audio Loading..."
      ) : (
        <>
          <div className="margin_bottom">
            <span className="ms-2 font-bold">Listen to article</span>
          </div>
          <audio id="post-audio" controls>
            <source src={speechUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </>
      )}

      <div className="post_image">
        <div className="p_img">
          <img
            style={{ width: "100%" }}
            src={post && post.image}
            alt={post && post.title}
            className="mt-10 p-3 post_image"
          />
        </div>
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: post && post.content }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        {/* <CallToAction /> */}
      </div>
      <CommentSection postId={post._id} />
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-xl mt-5">Recent articles</h1>
        <div className="flex flex-wrap gap-5 mt-5 justify-center">
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </main>
  );
}

