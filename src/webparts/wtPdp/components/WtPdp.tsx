import * as React from 'react';
import styles from './WtPdp.module.scss';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { IWtPdpProps } from './IWtPdpProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { Image, Segment, Step, Transition, Header, StepTitle, Icon,Progress,ProgressProps, Button, Container} from 'semantic-ui-react'

export default class WtPdp extends React.Component<IWtPdpProps, {}> {
  /**
   *
   */
  handleClick = (e, { title }) => this.setState({ active: title});
  HandleNextClick = (e) => this.setState({ active: this.state.Next});
  state={active:"Welcome",Next:"Proformance",User:"Jacob Donajkowski", Manager:"Kevin Roberts"}
  constructor(props:any) {
    super(props);
    SPComponentLoader.loadCss('https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css');
    
  }
  public render(): React.ReactElement<IWtPdpProps> {
    const {active, User, Manager} = this.state;
    return (
      <div className={styles.container}>
    <Step.Group attached='top' fluid={true} size='mini' >
      <Step 
        active={active==='Welcome'}
        onClick={this.handleClick}
        title='Welcome'
        >
        
        <Step.Content>
          <Step.Title>Welcome</Step.Title>
        </Step.Content>
      </Step>

      <Step 
      active={active==='Proformance'}
      onClick={this.handleClick}
      title='Proformance'>
      
        <Step.Content>
          <Step.Title>Proformance</Step.Title>
        </Step.Content>
      </Step>
      <Step 
      active={active==='Career Development'}
      onClick={this.handleClick}
      title='Career Development'>
      
        <Step.Content>
          <Step.Title>Career Development</Step.Title>
        </Step.Content>
      </Step>
      <Step 
      active={active==='Goals & Expectactions'}
      onClick={this.handleClick}
      title='Goals & Expectactions'>
      
        <Step.Content>
          <Step.Title>Goals & Expectactions</Step.Title>
        </Step.Content>
      </Step>
      <Step 
      active={active==='Safety'}
      onClick={this.handleClick}
      title='Safety'>
      
        <Step.Content>
          <Step.Title>Safety</Step.Title>
        </Step.Content>
      </Step>
      <Step 
      active={active==='Training'}
      onClick={this.handleClick}
      title='Training'>
      
        <Step.Content>
          <Step.Title>Training</Step.Title>
        </Step.Content>
      </Step>
      <Step 
      active={active==='Review'}
      onClick={this.handleClick}
      title='Review'>
      
        <Step.Content>
          <Step.Title>Review</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>
    <Transition visible= {active==='Welcome'} animation='browse' duration={1}>
    <Segment attached>
      <div style={{width:'100%',height:'340px'}}>
        <p>Welcome  {User},</p>
        <Image size='medium' floated='right' src='https://via.placeholder.com/350x350' />
        <p>The Wade Trim Professional Development Program (PDP) focuses on continuous improvement, training and career development. To start the process, complete the employee section of the PDP. Once you complete your portion, your responses will be forwarded to your supervisor/evaluator(s) {Manager} and they will contact you to schedule a meeting.</p>
        <p>Click Next to start your PDP.</p>
      </div>
    </Segment>
    </Transition>
    <Transition visible= {active==='Proformance'} animation='browse' duration={1}>
    <Segment  attached>
    <div>Preformance</div>
    </Segment>
    </Transition>
    <Transition visible= {active==='Career Development'} animation='browse' duration={1}>
    <Segment  attached>
    Career
    </Segment>
    </Transition>
    <Transition visible= {active==='Goals & Expectactions'} animation='browse' duration={1}>
    <Segment  attached>
    Goals & Expectactions
    </Segment>
    </Transition>
    <Transition visible= {active==='Safety'} animation='browse' duration={1}>
    <Segment  attached>
    Safety
    </Segment>
    </Transition>
    <Transition visible= {active==='Training'} animation='browse' duration={1}>
    <Segment  attached>
    Training
    </Segment>
    </Transition>
    <Transition visible= {active==='Review'} animation='browse' duration={1}>
    <Segment  attached>
    Review
    </Segment>
    </Transition>
    <div style={{paddingTop:'10px'}}>
      <Button floated='right' color= 'linkedin' onClick={this.HandleNextClick} >
      Next
      </Button>
    </div>
  </div>
    );
  }
}
