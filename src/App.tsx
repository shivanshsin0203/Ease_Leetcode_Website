import React, { useEffect, useState } from "react";
import {
  Github,
  Chrome,
  Twitter,
  Linkedin,
  MessageSquare,
  Video,
  BookOpen,
  Code,
  Star,
  ArrowRight,
  Coffee,
  Heart,
  Send,
  X,
  Copy,
  Check
} from "lucide-react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [copied, setCopied] = useState(false);
  const upiId = "example123@ybl";
  const handleCopy = async () => {
    await navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const reviews = [
    {
      name: "Sarah Chen",
      review:
        "This extension helped me crack my Google interview! The AI code reviews are incredibly helpful.",
      date: "2024-03-15",
    },
    {
      name: "Alex Kumar",
      review:
        "The video solutions are top-notch. Really appreciate the effort put into this tool.",
      date: "2024-03-14",
    },
  ];

  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowSupport(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white overflow-hidden">
      {/* Support Modal */}
      {showSupport && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={handleCloseModal}
        >
          <div className="bg-[#0A0F1C] rounded-2xl w-full max-w-2xl my-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowSupport(false)}
              className="absolute -top-4 -right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text mb-8">
                Support the Project
              </h2>

              {/* UPI Payment Section */}
              <div className="mb-8 ">
                <div className="gradient-border p-4 mb-4 mt-[15rem]">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-gray-300 mb-2">UPI ID:</p>
                    <div className="flex items-center space-x-2">
                      <code className="bg-white/10 px-3 py-1 rounded text-green-400">
                        {upiId}
                      </code>
                      <button
                        onClick={handleCopy}
                        className="p-1.5 hover:bg-white/10 rounded-md transition-colors"
                        title="Copy UPI ID"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review Form */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-red-400" />
                  Leave a Review
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Review
                    </label>
                    <textarea
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition-all h-32 resize-none"
                      placeholder="Share your experience..."
                    />
                  </div>
                  <button
                    onClick={() => {
                      // Handle review submission
                      setEmail("");
                      setReview("");
                    }}
                    className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-all hover:scale-105"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Review</span>
                  </button>
                </div>
              </div>

              {/* Recent Reviews */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-blue-400" />
                  Recent Reviews
                </h3>
                <div className="space-y-4">
                  {reviews.map((review, index) => (
                    <div
                      key={index}
                      className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <p className="text-gray-300 mb-2">{review.review}</p>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>{review.name}</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "py-4 bg-[#0A0F1C]/90 backdrop-blur-lg" : "py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code className="w-8 h-8 text-green-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
              Ease LeetCode
            </span>
          </div>
          <div className="flex items-center space-x-8 z-0">
            <div className="hidden md:flex space-x-6">
              <a
                href="#features"
                className="hover:text-green-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#preview"
                className="hover:text-green-400 transition-colors"
              >
                Preview
              </a>
              <a
                href="#testimonials"
                className="hover:text-green-400 transition-colors"
              >
                Testimonials
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowSupport(true)}
                className="group flex items-center space-x-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-0.5 rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105"
              >
                <span className="bg-[#0A0F1C] px-3 py-1.5 rounded-[6px] flex items-center space-x-2 group-hover:bg-transparent transition-colors">
                  <Coffee className="w-4 h-4 text-yellow-400" />
                  <span className="hidden sm:inline text-white">
                    Buy Me a Coffee
                  </span>
                </span>
              </button>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                Master LeetCode with AI-Powered
              </span>
              <br />
              <span className="bg-white text-transparent bg-clip-text">
                Code Reviews & Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Transform your coding practice with instant AI feedback, expert
              video solutions, and comprehensive guides from top competitive
              programmers.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <a
                href="https://chrome.google.com/webstore/your-extension"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full md:w-auto flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/20"
              >
                <Chrome className="w-5 h-5 mr-2" />
                Add to Chrome
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://www.producthunt.com/your-product"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full md:w-auto flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold transition-all hover:bg-white/20 hover:scale-105"
              >
                <Star className="w-5 h-5 mr-2" />
                View on ProductHunt
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="w-12 h-12 text-green-400" />,
                title: "AI Code Review",
                description:
                  "Get instant, intelligent feedback on your code. Our AI analyzes your solutions for efficiency, readability, and best practices.",
                gradient: "from-green-400 to-emerald-500",
              },
              {
                icon: <Video className="w-12 h-12 text-blue-400" />,
                title: "Video Solutions",
                description:
                  "Learn from detailed video explanations by Striver. Understand the thought process and implementation strategies.",
                gradient: "from-blue-400 to-indigo-500",
              },
              {
                icon: <BookOpen className="w-12 h-12 text-purple-400" />,
                title: "Article Integration",
                description:
                  "Access comprehensive articles and explanations right within LeetCode. Master the underlying concepts and patterns.",
                gradient: "from-purple-400 to-pink-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="gradient-border group hover:scale-105 transition-transform duration-300"
              >
                <div className="p-8 h-full">
                  <div className="mb-6 transform transition-transform group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-4 bg-gradient-to-r ${feature.gradient} text-transparent bg-clip-text`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div id="preview" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="gradient-border animate-glow">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80"
                  alt="Extension Preview"
                  className="w-full transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10K+", label: "Active Users" },
              { value: "500K+", label: "Code Reviews" },
              { value: "1000+", label: "Video Solutions" },
              { value: "4.9/5", label: "User Rating" },
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Code className="w-6 h-6 text-green-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                Ease LeetCode
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering developers to master coding interviews
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-600">
              © 2025 Ease LeetCode. Made with ❤️ for the coding community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
