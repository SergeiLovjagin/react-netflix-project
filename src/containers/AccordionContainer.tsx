import faqsData from '../fixtures/faqs.json';
import { Accordion } from '../components';

export const AccordionContainer = () => (
  <Accordion>
    <Accordion.Title>
      Frequently Asked Questions
    </Accordion.Title>
    {faqsData.map((item) => (
      <Accordion.Item key={item.id}>
        <Accordion.Header>
          {item.header}
        </Accordion.Header>
        <Accordion.Body>
          {item.body}
        </Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
);
