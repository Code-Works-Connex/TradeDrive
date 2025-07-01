'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  CardContent,
  CardActions,
  Dialog,
  DialogContent,
  IconButton,
  CircularProgress,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled, keyframes } from '@mui/material/styles';
import { API_ENDPOINTS } from '../../../src/api';

type Article = {
  id: number;
  title: string;
  youtubeLink: string;
  author: string;
  description: string;
  publishedAt: string;
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StyledCard = styled('div')(({ theme }) => ({
  backgroundColor: '#1a1a1a',
  color: '#ffffff',
  borderRadius: '12px',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'box-shadow 0.3s ease',
  width: 300,
  boxShadow: 'none',
  margin: 'auto',
  animation: `${fadeIn} 0.5s ease-out`,
  [theme.breakpoints.down('sm')]: {
    margin: '10px 0',
    width: '100%',
  },
}));

const Header = styled(Box)({
  background: 'linear-gradient(180deg, #1a1a1a 0%, #330000 100%)',
  padding: '40px 0',
  textAlign: 'center',
  color: '#ffffff',
  borderBottom: '3px solid #ff0000',
});

const getVideoId = (url: string): string => {
  const match = url.match(/(?:v=|\/videos\/|embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match?.[1] || '';
};

const getYouTubeThumbnail = (url: string): string => {
  const videoId = getVideoId(url);
  return videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : 'https://via.placeholder.com/300x200?text=No+Thumbnail';
};

const getEmbedUrl = (url: string): string => {
  const videoId = getVideoId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
};

export default function Sec1() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  const handleOpen = (url: string) => {
    const embedUrl = getEmbedUrl(url);
    if (embedUrl) {
      setSelectedVideo(embedUrl);
      setOpen(true);
    }
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
        if (!res.ok) throw new Error('Failed to fetch articles');
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.error('❌ Failed to fetch articles:', err);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #000000 0%, #1a0000 100%)',
        minHeight: '100vh',
        py: 8,
        px: { xs: 2, sm: 4, md: 10 },
      }}
    >
      <Header>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: 'center',
            color: 'gray',
            mb: 1,
            fontFamily: 'Roboto, sans-serif',
            letterSpacing: '1.5px',
          }}
        >
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
            fontFamily: 'Roboto, sans-serif',
            letterSpacing: '2px',
          }}
        >
          All Articles
        </Typography>
      </Header>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <CircularProgress sx={{ color: '#ff0000' }} />
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
          {articles.length === 0 ? (
            <Typography sx={{ color: 'white', textAlign: 'center' }}>
              No articles available
            </Typography>
          ) : (
            articles.map((article) => (
              <StyledCard key={article.id} onClick={() => handleOpen(article.youtubeLink)}>
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
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '1rem', sm: '1.05rem' },
                      fontFamily: 'Roboto, sans-serif',
                    }}
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
                    sx={{ color: '#ff0000' }}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                </CardActions>
              </StyledCard>
            ))
          )}
        </Box>
      )}

      {/* Modal with YouTube video */}
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
            sx={{ position: 'absolute', top: 8, right: 8, color: '#ff0000', zIndex: 1 }}
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
