"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import axios from "axios";

export default function GitHubSection() {
  const [repos, setRepos] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const fetchGitHubData = async () => {
    try {
      // Replace 'anuragthippani1' with actual GitHub username if different
      const username = "anuragthippani1";

      // Fetch user stats
      const userResponse = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setStats({
        repos: userResponse.data.public_repos,
        followers: userResponse.data.followers,
        following: userResponse.data.following,
      });

      // Fetch repositories
      const reposResponse = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
      );
      setRepos(reposResponse.data);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="github" className="py-20 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Recent repositories and contributions
          </p>
        </motion.div>

        {/* GitHub Stats */}
        {stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-16"
          >
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                {stats.repos}
              </div>
              <div className="text-sm text-foreground/60">Repositories</div>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                {stats.followers}
              </div>
              <div className="text-sm text-foreground/60">Followers</div>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                {stats.following}
              </div>
              <div className="text-sm text-foreground/60">Following</div>
            </div>
          </motion.div>
        )}

        {/* Repositories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="glass rounded-xl p-6 animate-pulse">
                  <div className="h-6 bg-primary/10 rounded mb-3" />
                  <div className="h-4 bg-primary/10 rounded mb-2" />
                  <div className="h-4 bg-primary/10 rounded w-2/3" />
                </div>
              ))
            : repos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                  <div className="relative h-full glass rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-2 gradient-text">
                      {repo.name}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                      {repo.description || "No description available"}
                    </p>

                    <div className="flex items-center gap-4 mb-4 text-sm text-foreground/60">
                      <div className="flex items-center gap-1">
                        <Star size={16} />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={16} />
                        <span>{repo.forks_count}</span>
                      </div>
                      {repo.language && (
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                          {repo.language}
                        </span>
                      )}
                    </div>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      View Repository
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/anuragthippani1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform"
          >
            <Github size={20} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}






