import React, { useEffect, useState } from 'react';
import { TextField, Button, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../App/redux/store';
import { createNews, loadNews, updateNews } from '../../App/redux/slicers/NewsSlicer';

function NewsUpdateForm(): JSX.Element {
  const { id } = useParams();
  const location = useLocation();
  const [oneNews, setOneNews] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    text: '',
    photo: '',
    video: '',
  });

  useEffect(() => {
    if (location.state && location.state.news) {
      setFormData({
        id: location.state.news.id,
        title: location.state.news.title,
        text: location.state.news.text,
        photo: location.state.news.photo,
        video: location.state.news.video,
      });
    }
  }, [location.state]);
  const dispatchUpdateNews = useAppDispatch();

  console.log(3333333333, oneNews);
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

    dispatchUpdateNews(updateNews({ ...formData })).catch(console.log);
  };

  // загрузка файлов
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
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
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Text"
          name="text"
          value={formData.text}
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Photo URL"
          name="photo"
          value={formData.photo}
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
          value={formData.video}
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

export default NewsUpdateForm;
