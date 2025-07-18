'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Dialog,
  DialogContent,
  IconButton,
  CircularProgress,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/navigation'; // ✅ for navigation
import { API_ENDPOINTS } from '../../../src/api';

type Article = {
  id: number;
  title: string;
  youtubeLink: string;
  author: string;
  description: string;
  publishedAt: string;
};

const getVideoId = (url: string): string => {
  const match = url.match(/(?:v=|\/videos\/|embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match?.[1] || '';
};

const getYouTubeThumbnail = (url: string): string => {
  const videoId = getVideoId(url);
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const getEmbedUrl = (url: string): string => {
  const videoId = getVideoId(url);
  return `https://www.youtube.com/embed/${videoId}`;
};

export default function Sec9() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');
  const router = useRouter();

  const handleOpen = (url: string) => {
    setSelectedVideo(getEmbedUrl(url));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo('');
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.publishedArticles, {
          credentials: 'include',
        });
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.error('❌ Failed to fetch articles:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const visibleArticles = articles.slice(0, 4);

  return (
    <Box sx={{ backgroundColor: '#222', py: 8, px: { xs: 2, sm: 4, md: 10 } }}>
      <Typography variant="subtitle1" sx={{ textAlign: 'center', color: 'gray', mb: 1 }}>
        OUR NEWS
      </Typography>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'white',
          mb: 5,
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        }}
      >
        Latest Articles
      </Typography>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <CircularProgress color="info" />
        </Box>
      ) : (
        <>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
            {visibleArticles.map((article) => (
              <Card
                key={article.id}
                onClick={() => handleOpen(article.youtubeLink)}
                sx={{
                  width: { xs: '100%', sm: 280, md: 300 },
                  backgroundColor: '#1a1a1a',
                  color: 'white',
                  boxShadow: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.02)' },
                  mx: 'auto',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 200,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${getYouTubeThumbnail(article.youtubeLink)})`,
                  }}
                />
                <CardContent sx={{ px: 2, pt: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 700, fontSize: { xs: '1rem', sm: '1.05rem' } }}
                  >
                    {article.title}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-start', px: 2, pb: 2 }}>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpen(article.youtubeLink);
                    }}
                    sx={{ color: 'white' }}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                </CardActions>
              </Card>
            ))}
          </Box>

          {/* "More" button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
            <Button
              variant="outlined"
              color="info"
              onClick={() => router.push('/blogs')}
              sx={{ borderRadius: '20px', textTransform: 'none' }}
            >
              More
            </Button>
          </Box>
        </>
      )}

      {/* YouTube Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{ sx: { backgroundColor: '#000' } }}
      >
        <DialogContent sx={{ position: 'relative', p: 0 }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 8, right: 8, color: '#fff', zIndex: 1 }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
            {selectedVideo && (
              <iframe
                src={selectedVideo}
                title="Video"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                allowFullScreen
              />
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
