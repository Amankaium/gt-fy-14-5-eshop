import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


export default function PeakSoft () {
	const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>ИНФОРМАЦИЯ!</Alert.Heading>
        <p>
				Peaksoft House, школа программирования участвует в 
				следующих разделах справочника: Академии. Адрес, контакты и другие 
				данные актуальны на 2021-10-07. Чтобы лично посетить это место, вам 
				следует отправиться сюда: Чуйская область, г. Бишкек, переулок Ой-Терскен, 15.
				 Рабочие дни: понедельник, вторник, среда, четверг, пятница, время работы
				  приведено выше в блоке «Режим работы». Страница 
				предприятия «Peaksoft House, школа программирования» просмотрена 565 раз.
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show info</Button>;
}