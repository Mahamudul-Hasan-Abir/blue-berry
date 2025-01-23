import Container from "../../Layouts/Container/Container";
import { TChildren } from "../../Types/randomTypes";
import Navigator from "../../components/Navigator/Navigator";
import faq from "../../assets/faq/faq.jpg";

import Collups from "../../components/Collups/Collups";
const Faq = () => {
  const children: TChildren = {
    page: "FAQ",
    pageName: "FAQ Page",
  };
  return (
    <div>
      <Navigator page={children.page} pageName={children.pageName}></Navigator>
      <Container>
        <div className="mx-2 mt-20">
          {/* title part */}
          <div className="text-center">
            <h1 className="text-[25px] font-bold">
              frequently asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-[14px] my-2 ">Customer service management.</p>
          </div>
          {/* FAQ PARt */}
          <div className="mt-10 md:grid grid-cols-12 gap-6">
            {/* image */}
            <div className="md:col-span-4">
              <img src={faq} className="rounded-3xl" alt="" />
            </div>
            {/* Collapse */}
            <div className="mt-10 md:mt-0 md:col-span-8">
              <div className="grid grid-cols-1 gap-6">
                {/* Collups */}

                <Collups
                  question="What is the multi vendor services?"
                  answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint atque pariatur cupiditate beatae voluptates quidem. Et tenetur autem itaque? Eum exercitationem assumenda enim eos voluptas. Ad incidunt laborum aliquam, expedita, voluptatibus quo id adipisci ea ratione ut, dignissimos natus?"
                ></Collups>
                <Collups
                  question="How to buy many products at a time?"
                  answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint atque pariatur cupiditate beatae voluptates quidem. Et tenetur autem itaque? Eum exercitationem assumenda enim eos voluptas. Ad incidunt laborum aliquam, expedita, voluptatibus quo id adipisci ea ratione ut, dignissimos natus?"
                ></Collups>
                <Collups
                  question="Refund policy for customer"
                  answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint atque pariatur cupiditate beatae voluptates quidem. Et tenetur autem itaque? Eum exercitationem assumenda enim eos voluptas. Ad incidunt laborum aliquam, expedita, voluptatibus quo id adipisci ea ratione ut, dignissimos natus?"
                ></Collups>
                <Collups
                  answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint atque pariatur cupiditate beatae voluptates quidem. Et tenetur autem itaque? Eum exercitationem assumenda enim eos voluptas. Ad incidunt laborum aliquam, expedita, voluptatibus quo id adipisci ea ratione ut, dignissimos natus?"
                  question="Exchange policy for customer"
                ></Collups>
                <Collups
                  answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint atque pariatur cupiditate beatae voluptates quidem. Et tenetur autem itaque? Eum exercitationem assumenda enim eos voluptas. Ad incidunt laborum aliquam, expedita, voluptatibus quo id adipisci ea ratione ut, dignissimos natus?"
                  question="Give a way products available"
                ></Collups>
                <Collups
                  answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint atque pariatur cupiditate beatae voluptates quidem. Et tenetur autem itaque? Eum exercitationem assumenda enim eos voluptas. Ad incidunt laborum aliquam, expedita, voluptatibus quo id adipisci ea ratione ut, dignissimos natus?"
                  question="Exchange policy for customer"
                ></Collups>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
