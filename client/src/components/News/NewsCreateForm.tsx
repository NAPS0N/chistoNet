import React, { useEffect, useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../App/redux/store';
import { createNews, loadNews } from '../../App/redux/slicers/NewsSlicer';

function NewsCreateForm(): JSX.Element {
  const dispatchAllNews = useAppDispatch();
  const dispatchNewNews = useAppDispatch();
  const allNews = useAppSelector((store) => store.news.news);
  console.log('NewsAdmin', allNews);

  useEffect(() => {
    dispatchAllNews(loadNews()).catch(console.log);
  }, [dispatchAllNews]);

  const [formData, setFormData] = useState({
    title: '',
    text: '',
    photo: '',
    video: '',
  });

  const [open, setOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }
    >,
  ): void => {
    const { name, value } = e.target;
    if (typeof name === 'string') {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatchNewNews(createNews({ ...formData }))
      .then(() => {
        setOpen(true); // Открыть модальное окно после успешной публикации
      })
      .catch(console.log);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ mt: 5, mx: 'auto', width: '50%' }}>
      <form onSubmit={handleSubmit}>
        <TextField label="Title" name="title" onChange={handleChange} fullWidth margin="normal" />
        <TextField
          label="Text"
          name="text"
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Photo URL"
          name="photo"
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" component="label" sx={{ mt: 2 }}>
          Upload Photo
          <input type="file" name="photo" accept="image/*" hidden onChange={handleFileChange} />
        </Button>
        <TextField
          label="Video URL"
          name="video"
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" component="label" sx={{ mt: 2 }}>
          Upload Video
          <input type="file" name="video" accept="video/*" hidden onChange={handleFileChange} />
        </Button>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Button type="submit" variant="contained" color="primary">
            Опубликовать
          </Button>
        </Box>
      </form>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Новость опубликована</DialogTitle>
        <DialogContent>
          <DialogContentText>Ваша новость успешно опубликована.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default NewsCreateForm;
