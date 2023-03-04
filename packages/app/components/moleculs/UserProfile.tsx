import ModalCenter from '@/components/atom/ModalCenter';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState, type ChangeEvent } from 'react';

interface P {
  isEditable: boolean;
  onSubmit?: (file: File) => Promise<void>;
  avatarSize?: number;
  isNameHidden?: boolean;
  profile: {
    name?: string | null;
    image?: string | null;
  };
}

interface ProfileEditModalProps {
  isOpen: boolean;
  profileImage?: string;
  onClose: () => void;
  onSubmit?: (file: File) => Promise<void>;
}

function ProfileEditModal(props: ProfileEditModalProps): JSX.Element {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [profilePreview, setProfilePreview] = useState<string | undefined>(props.profileImage);

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (files) {
      const reader = new FileReader();
      reader.onload = function () {
        setProfilePreview(reader.result?.toString());
      };
      reader.readAsDataURL(files[0]);
      setSelectedFile(files[0]);
    }
  };

  const handleOnSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (selectedFile && props.onSubmit) {
      props.onSubmit(selectedFile).then(() => {
        props.onClose();
      });
    }
  };

  return (
    <ModalCenter isOpen={props.isOpen} onClose={props.onClose}>
      <Card style={{ maxWidth: '90%', width: '680px' }}>
        <CardContent>
          <form onSubmit={handleOnSubmit}>
            <Grid
              container
              alignItems={'center'}
              justifyContent={'center'}
              rowGap={5}
              style={{ margin: '3rem 0rem 3rem' }}
            >
              <Grid item xs={12} sm={4}>
                <Avatar sx={{ height: 80, width: 80, margin: '0 auto' }} src={profilePreview} alt='user profile' />
              </Grid>
              <Grid item xs={12} sm={8}>
                <input id='fileInput' type='file' onChange={handleFileInput} accept='image/*' />
                <Typography variant='body2' color='textSecondary' gutterBottom style={{ marginTop: '0.5rem' }}>
                  allow: *.jpg, *.png ~500kb
                </Typography>
              </Grid>
            </Grid>
            <Button type='submit' fullWidth>
              Upload
            </Button>
          </form>
        </CardContent>
      </Card>
    </ModalCenter>
  );
}

/**
 * 編集可能な場合、プロフィールにマウスカーソルを合わせると編集ボタンが表示される
 * かつ、クリックするとモーダルが開き、プロフィールの編集ができる
 */
export default function UserProfile(props: P): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const size = props.avatarSize ?? 80;

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className='center' style={{ height: 'auto', flexDirection: 'column' }}>
      <Tooltip title={props.isEditable && 'Edit image'} placement='top' arrow>
        <Avatar
          sx={{ height: size, width: size, '&:hover': { filter: props.isEditable ? 'brightness(70%)' : undefined } }}
          src={props.profile.image === null ? undefined : props.profile.image}
          onClick={props.isEditable ? handleOpen : undefined}
          alt='user profile'
        />
      </Tooltip>
      <ProfileEditModal
        isOpen={isOpen}
        profileImage={props.profile.image === null ? undefined : props.profile.image}
        onClose={handleClose}
        onSubmit={props.onSubmit}
      />
      {props.isNameHidden ? null : (
        <Typography variant={'h6'} fontWeight='bold' textAlign='center' style={{ lineHeight: '3rem' }}>
          {props.profile.name}
        </Typography>
      )}
    </div>
  );
}
