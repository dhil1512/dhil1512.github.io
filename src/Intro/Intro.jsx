import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Intro(){
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };

    return(
        <div className="container text-white mt-3">
        <div className="row">
            <div className="col-12">
                <div className="project-container p-2 mb-5 rounded">
                    <button className={`btn m-2 ${activeTab === 'tab1' ? 'active-btn' : ''}`} onClick={() => handleTabClick('tab1')}>About</button>
                    <button className={`btn m-2 ${activeTab === 'tab2' ? 'active-btn' : ''}`} onClick={() => handleTabClick('tab2')}>Contact</button>

                    <div className="content">
                        {activeTab === 'tab1' && 
                        <div>
                            <h3>About me</h3>
                            <p>I'm Dylan – a software development enthusiast, always building cool projects using a variety of technologies. I’m diving deep into learning new skills and expanding my knowledge every day. With a passion for problem-solving and innovation, I love bringing ideas to life through code.</p>
                        </div>
                        }

                        {activeTab === 'tab2' &&
                        <div>
                        <h3>Contact</h3>
                        <p>The best way to contact me is at <strong>d@dylanw.co.uk</strong></p>
                        </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Intro