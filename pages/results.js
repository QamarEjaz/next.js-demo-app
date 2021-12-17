import { Card, CardGroup, Container, Row,Col } from "react-bootstrap";
export default function Results({ results }) {
  return (
    <>
      {results.map((result) => (
           <>
           <Container className="dark my-5">
           <Row className="show-grid">
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>{result.slug}</Card.Title>
              <Card.Text>{result.id}</Card.Text>
              <Card.Text>{result.date}</Card.Text>
              <Card.Text>{result.date_gmt}</Card.Text>
              <Card.Text>{result.guid.rendered}</Card.Text>
              <Card.Text>{result.modified}</Card.Text>
              <Card.Text>{result.modified_gmt}</Card.Text>
              <Card.Text>{result.slug}</Card.Text>
              <Card.Text>{result.status}</Card.Text>
              <Card.Text>{result.type}</Card.Text>
              <Card.Text>{result.link}</Card.Text>
              <Card.Text>{result.content.rendered}</Card.Text>
              <Card.Text>{result.excerpt.rendered}</Card.Text>
              <Card.Text>{result.excerpt.protected}</Card.Text>
              <Card.Text>{result.author}</Card.Text>
              <Card.Text>{result.featured_media}</Card.Text>
              <Card.Text>{result.parent}</Card.Text>
              <Card.Text>{result.parent}</Card.Text>
              <Card.Text>{result.menu_order}</Card.Text>
              <Card.Text>{result.comment_status}</Card.Text>
              <Card.Text>{result.ping_status}</Card.Text>
              <Card.Text>{result.template}</Card.Text>
              <Card.Text>{result._links.self.href}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        </Row>
        </Container>
        </>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://eswaran.no/luga//wp-json/wp/v2/pages");
  const data = await response.json();
  console.log(data)
  return {
    props: {
      results: data,
      
    },
  };
}
