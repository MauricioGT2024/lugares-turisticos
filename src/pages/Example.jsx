import Card from '../components/Card/Card';
import { useTranslation } from 'react-i18next';

const ExamplePage = () => {
  const { t } = useTranslation();

  const items = [
    { id: 1, title: t('card1.title'), text: t('card1.text'), image: '/path/to/image1.jpg', link: '/link1' },
    { id: 2, title: t('card2.title'), text: t('card2.text'), image: '/path/to/image2.jpg', link: '/link2' },
    { id: 3, title: t('card3.title'), text: t('card3.text'), image: '/path/to/image3.jpg', link: '/link3' },
  ];

  return (
    <div className="card-grid">
      {items.map((item) => (
        <Card key={item.id} title={item.title} text={item.text} image={item.image} link={item.link} />
      ))}
    </div>
  );
};

export default ExamplePage;