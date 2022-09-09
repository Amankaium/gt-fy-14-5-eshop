import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function GeekTech(props) {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Образовательный центр GeekTech!</Alert.Heading>
                <p>
                    Образовательный центр GeekTech (ГикТек) был основан Fullstack-разработчиком Айдаром Бакировым
                    и Android-разработчиком Нургазы Сулаймановым в 2018-ом году в Бишкеке с целью дать возможность
                    каждому человеку, даже без опыта в технологиях, гарантированно освоить IT-профессию.
                    В данный момент более 400 студентов в возрасте от 12 до 45 лет изучают здесь программирование,
                    дизайн и английский язык. Филиальная сеть образовательного центра представлена в таких городах,
                    как Бишкек, Ош и Кара-Балта.
                </p>
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show text</Button >;
}



export default GeekTech;