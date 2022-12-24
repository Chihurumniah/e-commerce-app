//import Carousel from 'react-bootstrap/Carousel';
import styles from '../../styles/Home.module.css'
import Carousel from 'react-bootstrap/Carousel'

/**
 * 
 * @color {*this is the site background color} param0 
 * @categories {*array containing objects of [category, imgurl] fields} param1
 * @shopDsc {*Short description of all available product categories} param2
 * @returns Carousel of the different available categories
 * 
 */
const HomeSlides = ({color, categories, shopDsc}) => {
  return (
    <div style={{background: color}} className={styles.outerSlides}>
        <Carousel>
             {
                  JSON.parse(categories).map((item) =>
                  <Carousel.Item key={item.category}>
                    <div className='d-flex justify-content-center'>
                      <img
                        className={ styles.slideImg }
                        src={item.imgurl}
                        alt={item.category}
                      />
                    </div>
                    <Carousel.Caption>
                      <div className='d-flex justify-content-center'>
                        <div className={styles.transparent}>
                          <h3>{item.category}</h3>
                          <p>{shopDsc}</p>
                        </div>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                  )
             }  
        </Carousel>
      </div>
  );
}

export default HomeSlides;


/**
 * 
            <Carousel.Item>
            <div className='d-flex justify-content-center'>
              <img
                className={ styles.slideImg }
                src="/img/img4.png"
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
              <div className='d-flex justify-content-center'>
                <div className={styles.transparent}>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='d-flex justify-content-center'>
              <img
                className={styles.slideImg}
                src="/img/img5.png"
                alt="Second slide"
              />
            </div>
            <Carousel.Caption>
            <div className='d-flex justify-content-center'>
              <div className={styles.transparent}>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            </Carousel.Caption>
          </Carousel.Item>
 */