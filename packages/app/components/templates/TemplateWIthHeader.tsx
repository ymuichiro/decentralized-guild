import Appbar from '@/components/atom/AppBar';
import DrawerPermanent from '@/components/atom/DrawerPermanent';
import DrawerSwipeable from '@/components/atom/DrawerSwipeable';
import DrawerContent from '@/components/moleculs/DrawerContent';
import PageHead from '@/components/moleculs/PageHead';
import { AccountUser } from '@/services/AccountUser';
import { NetworkSymbol } from '@/services/NetworkSymbol';
import Hidden from '@mui/material/Hidden';
import Toolbar from '@mui/material/Toolbar';
import { useRouter } from 'next/router';
import { type User } from 'oas/types';
import { useEffect, useState } from 'react';

interface Props {
  title?: string;
  description?: string;
  user: User;
  meta?: React.ReactNode;
  children: React.ReactNode;
}

export default function TemplateWithHeader(props: Props): JSX.Element {
  const router = useRouter();
  const [balance, setBalance] = useState<number>(0);
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const getBalance = async () => {
    if (process.env.NODE_ENV === 'development' || !props.user.publicKey) return setBalance(0);
    try {
      const network = new NetworkSymbol();
      const account = new AccountUser(props.user.publicKey, network.networkType);
      const accountInfo = await account.getAccountInfo();
      const currencyMosaic = account.getCurrentAccountCurrencyBalance(accountInfo.mosaics);
      if (!currencyMosaic) return;
      setBalance(currencyMosaic.amount);
    } catch {
      console.info('There is no account information in the network yet.');
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  const handleUpload = async (file: File): Promise<void> => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch(`/api/users/${props.user.id}/profile`, {
      method: 'POST',
      body: formData,
    });
    if (response.status === 204) {
      alert('success');
      router.reload();
    }
    alert('failed');
  };

  const handleDrawerToggle = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <>
      <PageHead title={props.title} description={props.description} meta={props.meta} />
      <div style={{ display: 'flex' }}>
        <Appbar onClickMenu={handleDrawerToggle} />
        <Hidden mdDown>
          <DrawerPermanent>
            <DrawerContent
              user={{ name: props.user.name, image: props.user.image }}
              onUpdateProfile={handleUpload}
              info={{ balance: balance, rpt: 0 }}
            />
          </DrawerPermanent>
        </Hidden>
        <Hidden mdUp>
          <DrawerSwipeable isOpen={isOpenDrawer} handleDrawerToggle={handleDrawerToggle}>
            <DrawerContent
              user={{ name: props.user.name, image: props.user.image }}
              onUpdateProfile={handleUpload}
              info={{ balance: balance, rpt: 0 }}
            />
          </DrawerSwipeable>
        </Hidden>
        <div style={{ flexGrow: 1 }}>
          <Toolbar />
          {props.children}
        </div>
      </div>
    </>
  );
}
