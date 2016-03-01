import React from 'react';
import styles from './App.css';
import Preview from './Preview';
import 'font-awesome/css/font-awesome.css';
import './material-ui/css/material-design-iconic-font.css';
import Header from '../common/Header';
import Button from '../common/Button';
import IconImage from '../common/IconImage/index.js';
import Dropdown from '../common/Dropdown';
import DropdownItem from '../common/Dropdown/Item';
import TextOnlyElement from '../common/TextOnlyElement';
import TextImageElement from '../common/TextImageElement';
import ImageElement from '../common/ImageElement';
import Modal from '../common/Modal';
import TopNavigationBar from '../common/TopNavigationBar';
import LabelFooterAction from '../common/LabelFooterAction';
import Icon from '../common/Icon';
import Typography from '../common/Typography';
import Avatar from "../common/Avatar";
import MainActionButton from '../common/MainActionButton';
import LabelSmall from "../common/LabelSmall";
import LabelStandard from "../common/LabelStandard";

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          showModal: false,
          showImageModal: false,
          showFullImageText: false,
          showFullText: false
      };
  }
  render() {
      return (
        <div className={styles.wrapper}>
          <h1>/common</h1>

            <Preview title="/Dropdown" width={200}>
              <Dropdown label={<span>Some label</span>}>
                <DropdownItem onClick={() => console.log('item1')}>Item 1</DropdownItem>
                <DropdownItem onClick={() => console.log('item2')}>Item 2</DropdownItem>
              </Dropdown>
              <br/>
              <Dropdown label={<span>Some label</span>} right>
                <DropdownItem>Item 1</DropdownItem>
                <DropdownItem>Item 2</DropdownItem>
              </Dropdown>
            </Preview>

            <Preview title="/Modal" width={200}>
              <button onClick={() => this.setState({showModal: true})}>Show modal</button>
              <Modal onHide={() => this.setState({showModal: false})} show={this.state.showModal}>
                Modal content
              </Modal>
            </Preview>

            <Preview title="/IconImage" width={200}>
                <IconImage/>
            </Preview>

            <Preview title="/Header" width={300}>
                <Header title="Logg aktiviteter" subTitle="Favoritter (0)"/>
            </Preview>

            <Preview title="/Button">
                <Button onClick={() => console.log('Clicked button')} type="secondary">
                    Secondary button
                </Button>
                <Button onClick={() => console.log('Clicked button')}>
                    Primary button
                </Button>
            </Preview>

            <Preview title={"TopNavigationBar"} width={900}>
                <TopNavigationBar/>
            </Preview>

            <Preview title="/LabelFooterAction">
              <LabelFooterAction
                onClick={() => console.log('Clicked favorite')}
                icon={'zmdi zmdi-favorite'}>{8}</LabelFooterAction>

              <LabelFooterAction
                onClick={() => console.log('Clicked favorite outlined')}
                icon={'zmdi zmdi-favorite-outline'}/>

              <LabelFooterAction
                onClick={() => console.log('Clicked bookmark')}
                icon={'zmdi zmdi-bookmark-outline'}>{12}</LabelFooterAction>
            </Preview>

            <Preview title="/TextOnlyElement" width={300}>
              <TextOnlyElement>
                Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne.Dette er en kjempe fin tekst.
                Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne. <a target="_blank" href="http://www.google.com"> #google</a>
              </TextOnlyElement>
              <br/>
              <TextOnlyElement
                onClick={() => this.setState({showFullText: !this.state.showFullText})}
                showFullText={this.state.showFullText}>
                Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne. Dette er en kjempe fin tekst.
                <a target="_blank" href="http://www.google.com"> #google</a> Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne.
                Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne. Dette er en kjempe fin tekst.
                Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne. Dette er en kjempe fin tekst.
                Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne. Dette er en kjempe fin tekst.
                Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne. Dette er en kjempe fin tekst.
              </TextOnlyElement>
            </Preview>

            <Preview title="/TextImageElement" width={300}>
              <TextImageElement>
                Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne.
                <a target="_blank" href="http://www.google.com"> #google</a>
              </TextImageElement>
              <br/>
              <TextImageElement
                onClick={() => this.setState({showFullImageText: !this.state.showFullImageText})}
                showFullText={this.state.showFullImageText}>
                Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne.
                <a target="_blank" href="http://www.google.com"> #google</a>
                Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne.
                <a target="_blank" href="http://www.google.com"> #google</a>
                Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne.
                <a target="_blank" href="http://www.google.com"> #google</a>
                Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne.
                <a target="_blank" href="http://www.google.com"> #google</a>
                Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne.
                <a target="_blank" href="http://www.google.com"> #google</a>
              </TextImageElement>
            </Preview>

            <Preview title="/ImageElement" width={300} height={300}>
              <ImageElement
                url="http://funnyasduck.net/wp-content/uploads/2013/01/funny-big-massive-rubber-duck-river-water-quack-motherducker-pics.jpg"
                showModal={this.state.showImageModal}
                onModalHide={() => this.setState({showImageModal: false})}
                onClick={() => this.setState({showImageModal: true})}/>
            </Preview>

            <Preview title="/icons">
              <div className={styles.subHeader}>IconNano (10px)</div>
              <Icon icon={'zmdi zmdi-favorite'} onClick={() => console.log('Clicked on IconNano')} size={'nano'}/>
              <div className={styles.subHeader}>IconMicro (12px)</div>
              <Icon icon={'zmdi zmdi-favorite'} onClick={() => console.log('Clicked on IconMicro')} size={'micro'}/>
              <div className={styles.subHeader}>IconMini (16px)</div>
              <Icon icon={'zmdi zmdi-favorite'} onClick={() => console.log('Clicked on IconMini')} size={'mini'}/>
              <div className={styles.subHeader}>IconSmall (20px)</div>
              <Icon icon={'zmdi zmdi-favorite'} onClick={() => console.log('Clicked on IconSmall')} size={'small'}/>
              <div className={styles.subHeader}>IconStandard (24px)</div>
              <Icon icon={'zmdi zmdi-favorite'} onClick={() => console.log('Clicked on IconStandard')} size={'standard'}/>
              <div className={styles.subHeader}>IconLarge1 (36px)</div>
              <Icon icon={'zmdi zmdi-favorite'} onClick={() => console.log('Clicked on IconLarge1')} size={'large1'}/>
              <div className={styles.subHeader}>IconLarge2 (46px)</div>
              <Icon icon={'zmdi zmdi-favorite'} onClick={() => console.log('Clicked on IconLarge2')} size={'large2'}/>
              <div className={styles.subHeader}>IconDisplay1 (72px)</div>
              <Icon icon={'zmdi zmdi-favorite'} onClick={() => console.log('Clicked on IconDisplay1')} size={'display1'}/>
              <div className={styles.subHeader}>IconDisplay2 (96px)</div>
              <Icon icon={'zmdi zmdi-favorite'} onClick={() => console.log('Clicked on IconDisplay2')} size={'display2'}/>
            </Preview>

            <Preview title="/typography">
              <Typography type={'caption1Normal'}>caption1Normal (10px)</Typography>
              <br/>
              <Typography type={'caption1Strong'}>caption1Strong (10px)</Typography>
              <br/>
              <Typography type={'caption2Normal'}>caption2Normal (12px)</Typography>
              <br/>
              <Typography type={'caption2Strong'}>caption2Strong (12px)</Typography>
              <br/>
              <Typography type={'bodyTextNormal'}>bodyTextNormal (14px)</Typography>
              <br/>
              <Typography type={'bodyTextStrong'}>bodyTextStrong (14px)</Typography>
              <br/>
              <Typography type={'bodyTextTitle'}>bodyTextTitle (14px)</Typography>
              <br/>
              <Typography type={'ingressNormal'}>ingressNormal (18px)</Typography>
              <br/>
              <Typography type={'ingressStrong'}>ingressStrong (18px)</Typography>
              <br/>
              <Typography type={'ingressTitles'}>ingressTitles (18px)</Typography>
              <br/>
              <Typography type={'header1'}>header1 (24px)</Typography>
              <br/>
              <Typography type={'display1'}>display1 (32px)</Typography>
              <br/>
              <Typography type={'display2'}>display2 (48px)</Typography>
              <br/>
              <Typography type={'display3'}>display3 (56px)</Typography>
            </Preview>

            <Preview title="/avatars">
              <div className={styles.subHeader}>Avatar Small (24px)</div>
              <Avatar link={"/"} user={"all"} size={"small"}/>
              <div className={styles.subHeader}>Avatar Standard (36px)</div>
              <Avatar link={"/"} user={"friends"} size={"standard"}/>
              <div className={styles.subHeader}>Avatar Large (48px)</div>
              <Avatar link={"/"} user={"none"} size={"large"}/>
              <div className={styles.subHeader}>Avatar Display1 (72px)</div>
              <Avatar link={"/"} user={"all"} size={"display1"}/>
              <div className={styles.subHeader}>Avatar Display2 (96px)</div>
              <Avatar link={"/"} user={"none"} size={"display2"}/>
            </Preview>
	    
	    <Preview title="/MainActionButton">
              <MainActionButton icon={'zmdi zmdi-favorite'} onClick={() => console.log('Clicked MainActionButton')}/>
            </Preview>

            <Preview title="/labels">
                <div className={styles.subHeader}>Small Label</div>
                <LabelSmall
                    content={"45"}
                    icon={'zmdi zmdi-favorite'}
                    onClick={() => console.log('Clicked on IconDisplay2')}
                    type={"caption2Normal"}
                    />
                <div className={styles.subHeader}>Standard Label</div>
                <LabelStandard
                    content={"425"}
                    icon={'zmdi zmdi-brightness-7'}
                    onClick={() => console.log('Clicked on IconDisplay2')}
                    />
            </Preview>

          <h1>/mobile</h1>
          <h1>/pad</h1>
          <h1>/desktop</h1>
        </div>
    );
  }
}
