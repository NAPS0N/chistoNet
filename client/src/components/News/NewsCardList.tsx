import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import SvgIcon from '@mui/material/SvgIcon';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import type { IconButtonProps } from '@mui/material/IconButton';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useAppDispatch } from '../../App/redux/store';
import { deleteNews } from '../../App/redux/slicers/NewsSlicer';

type ExpandMoreProps = {
  expand: boolean;
} & IconButtonProps;

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function NewsCardList({ news, userAuth }): JSX.Element {
  const navigate = useNavigate();
  const dispatchDeleteNews = useAppDispatch();
  const formattedDate = format(new Date(news.updatedAt), 'dd.MM.yyyy HH:mm');
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSettingsClick = () => {
    navigate(`/updatenews/${news.id}`, { state: { news } });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmDelete = () => {
    dispatchDeleteNews(deleteNews(Number(news.id))).catch(console.log);
    handleClose();
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
      <Card sx={{ maxWidth: 500, backgroundColor: '#1f8a7009', boxShadow: 10 }}>
        <CardHeader
          avatar={<Avatar aria-label="recipe" src="../../../public/logo/Фавикон.png" />}
          title="ЧИСТО.NET"
          subheader={formattedDate}
        />
        <CardMedia
          component="img"
          sx={{ boxShadow: 3, maxHeight: 500 }}
          image={news.photo}
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            variant="body4"
            color="text.secondary"
            sx={{ fontSize: '1rem', fontWeight: 'bold' }}
          >
            {news.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {userAuth?.firstName === 'admin' && (
            <Box>
              <IconButton aria-label="delete" onClick={handleClickOpen}>
                <DeleteForeverTwoToneIcon />
              </IconButton>
              <IconButton aria-label="settings" onClick={handleSettingsClick}>
                <SvgIcon>
                  {/* credit: plus icon from https://heroicons.com/ */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                    />
                  </svg>
                </SvgIcon>
              </IconButton>
            </Box>
          )}
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography
              component="div"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(news.text) }}
            />
          </CardContent>
        </Collapse>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Подтвердите удаление</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Вы уверены, что хотите удалить эту новость? Это действие необратимо.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Отмена
            </Button>
            <Button onClick={handleConfirmDelete} color="primary" autoFocus>
              Удалить
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    </Box>
  );
}

export default NewsCardList;
