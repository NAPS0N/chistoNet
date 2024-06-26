import React, { useEffect, useState } from 'react';
import { TextField, Button, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../App/redux/store';
import { createNews, loadNews } from '../../App/redux/slicers/NewsSlicer';
import { fetchCreateNews } from '../../../pages/News/api.news';

function NewsCreateForm(): JSX.Element {
  const dispatchAllNews = useAppDispatch();
  const dispatchNewNews = useAppDispatch();
  const allNews = useAppSelector((store) => store.news.news);
  console.log('NewsAdmin', allNews);

  // загрузка всех новостей
  useEffect(() => {
    dispatchAllNews(loadNews()).catch(console.log);
  }, []);

  const [formData, setFormData] = useState({
    title: '',
    text: '',
    photo: '',
    video: '',
  });

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('NewsAdminSubmit', e.target);
    dispatchNewNews(createNews({ ...formData })).catch(console.log);
    // Process formData here (e.g., send it to the server or dispatch an action)
  };

  // загрузка файлов
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    console.log('handleFileChange', files);

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
  console.log('formdata', formData);

  return (
    <Box sx={{ mt: 5, mx: 'auto', width: '50%' }}>
      <form onSubmit={handleSubmit}>
        {/* <FormControl fullWidth margin="normal">
          <InputLabel id="news-select-label">Select News</InputLabel>
          <Select
            labelId="news-select-label"
            name="selectedNews"
            value={formData.selectedNews}
            onChange={handleChange}
            label="Select News"
          >
            {allNews.map((news) => (
              <MenuItem key={news.id} value={news.title}>
                {news.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}
        <TextField
          label="Title"
          name="title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Text"
          name="text"
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Photo URL"
          name="photo"
          onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, video: e.target.value })}
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
    </Box>
  );
}

export default NewsCreateForm;
