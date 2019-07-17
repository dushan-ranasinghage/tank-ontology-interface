import React, {Component} from 'react'
import {
  Container,
  Divider,
  Header,
  List,
  Menu,
  Segment,
  Form,
  Table,
  Icon,
  Button
} from 'semantic-ui-react'
import { withRouter } from 'react-router'
import { getTestData } from '../actions/index'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import axios from 'axios'

class Content extends Component {
    constructor(props) {
        super(props);
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleChange3 = this.handleChange3.bind(this)
        this.handleChange4 = this.handleChange4.bind(this)
        this.handleChange5 = this.handleChange5.bind(this)
        this.handleChange6 = this.handleChange6.bind(this)
      }

      state = {
        inputValue1: 'replace',
        inputValue2: 'replace',
        inputValue3: 'replace',
        inputValue4: 'replace',
        inputValue5: 'replace',
        inputValue6: 'replace',
        showTable: false,
        productDrop1 : [
            { key: 'No Data', text: 'No Data', value: 'No Data' }
        ],
        productDrop2 : [
            { key: 'No Data', text: 'No Data', value: 'No Data' }
        ],
        productDrop3 : [
            { key: 'No Data', text: 'No Data', value: 'No Data' }
        ],
        productDrop4 : [
            { key: 'No Data', text: 'No Data', value: 'No Data' }
        ],
        productDrop5 : [
              { key: 'No Data', text: 'No Data', value: 'No Data' }
        ],
        productDrop6 : [
                { key: 'No Data', text: 'No Data', value: 'No Data' }
        ]
      }

    componentDidMount() {
        axios.get("http://localhost:8083/getSubClasses")
            .then(res => {
                let subjectUrl = res.data
                const dropData1 = []
                const dropData2 = []
                const dropData3 = []
                const dropData4 = []
                const dropData5 = []
                const dropData6 = []
                subjectUrl.map((obj)=>{
                    if(obj.TankType){
                        let x1 = obj.TankType
                    dropData1.push({key: x1, text: x1, value:x1})
                    } else if(obj.Nation){
                        let x2 = obj.Nation
                    dropData2.push({key: x2, text: x2, value:x2})
                    } else if(obj.Clan){
                        let x3 = obj.Clan
                    dropData3.push({key: x3, text: x3, value:x3})
                    } else if(obj.Gun){
                        let x4 = obj.Gun
                    dropData4.push({key: x4, text: x4, value:x4})
                    } else if(obj.Map){
                        let x5 = obj.Map
                    dropData5.push({key: x5, text: x5, value:x5})
                    } else{
                        let x6 = obj.Crew
                    dropData6.push({key: x6, text: x6, value:x6})
                    }
                    // console.log("Val From API", x1,x2,x3,x4,x5,x6)
                })
                this.setState({ productDrop1: dropData1 })
                this.setState({ productDrop2: dropData2 })
                this.setState({ productDrop3: dropData3 })
                this.setState({ productDrop4: dropData4 })
                this.setState({ productDrop5: dropData5 })
                this.setState({ productDrop6: dropData6 })
            })
            .catch(err => {
                console.log("ERROR PRODUCT GETTING")
            })
    }

    handleChange1(e){
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue1: e.target.textContent
          });
    }    
    
    handleChange2(e){
        debugger
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue2: e.target.textContent
          });
          debugger
    }    
    
    handleChange3(e){
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue3: e.target.textContent
          });
    }

    handleChange4(e){
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue4: e.target.textContent
          });
    }

    handleChange5(e){
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue5: e.target.textContent
          });
    }

    handleChange6(e){
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue6: e.target.textContent
          });
    }

    render() {
        console.log("Props", this.props)
        console.log("State", this.state)
        return (
            <div>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as='a' header>
                            Ontology
                        </Menu.Item>
                        <Menu.Item as='a'>Home</Menu.Item>
                        <Menu.Menu position='right'>
                        <Menu.Item as='a' onClick={()=>{
                                window.history.replaceState(null, null, "/");
                                window.location.href = '/';
                        }}>Logout</Menu.Item>
                        </Menu.Menu>
                    </Container>
                </Menu>

                <Container text style={{ marginTop: '7em', minHeight: '100vh', minWidth: '1100px' }}>
                    {/* <Header as='h1'>War Tanks Ontology</Header> */}
                    <center>
                        <Header as='h2' block>
                            <Icon name='search' />
                            <Header.Content>Search Tanks</Header.Content>
                        </Header>
                    </center>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Select selectOnBlur={false} fluid label='Tank Type' options={this.state.productDrop1} placeholder='Tank Type' onChange={this.handleChange1} />
                            <Form.Select selectOnBlur={false} fluid label='Nation' options={this.state.productDrop2} placeholder='Nation' onChange={this.handleChange2} />
                            <Form.Select selectOnBlur={false} fluid label='Clan' options={this.state.productDrop3} placeholder='Clan' onChange={this.handleChange3} />
                            <Form.Select selectOnBlur={false} fluid label='Gun' options={this.state.productDrop4} placeholder='Gun' onChange={this.handleChange4} />
                            <Form.Select selectOnBlur={false} fluid label='Map' options={this.state.productDrop5} placeholder='Map' onChange={this.handleChange5} />
                            <Form.Select selectOnBlur={false} fluid label='Crew/Commander' options={this.state.productDrop6} placeholder='Crew/Commander' onChange={this.handleChange6} />
                        </Form.Group>
                        <Button
                            onClick={() => {
                                this.props.getTestData(this.state.inputValue1, this.state.inputValue2, this.state.inputValue3, this.state.inputValue4, this.state.inputValue5, this.state.inputValue6)
                                this.setState({ showTable: true })
                            }}
                        primary>Search</Button>
                        <Button secondary 
                        onClick={()=>window.location.reload()}
                        >Reset</Button>
                    </Form>
                           <Segment loading={false}>
                               <Table celled inverted selectable>
                                   <Table.Header >
                                       <Table.Row>
                                           <Table.HeaderCell>Tank Name</Table.HeaderCell>
                                           <Table.HeaderCell>Price($)</Table.HeaderCell>
                                           <Table.HeaderCell>Weights(Tons)</Table.HeaderCell>
                                       </Table.Row>
                                   </Table.Header>

                                   <Table.Body>
                                   {this.props && this.props.test && this.props.test.testlist && this.props.test.testlist ? this.props && this.props.test && this.props.test.testlist && this.props.test.testlist.map((obj,i)=>{
                                      return <Table.Row  key={i}>
                                           <Table.Cell>{obj.tank}</Table.Cell>
                                           <Table.Cell>{obj.price}</Table.Cell>
                                           <Table.Cell>{obj.weight}</Table.Cell>
                                       </Table.Row>
                                   }): <Table.Row style={{backgroundColor: '#404040'}}>
                                   <Table.Cell>No Data</Table.Cell>
                                   <Table.Cell>No Data</Table.Cell>
                                   <Table.Cell>No Data</Table.Cell>
                               </Table.Row>}
                                   </Table.Body>
                               </Table> 
                           </Segment> 
                </Container>


                <Segment inverted vertical style={{ 
                    margin: '1em 0em 0em', 
                    padding: '1em 0em',
                    width: '100%',
                    position: 'fixed',
                    bottom: '0px'
                    }}>
                    <Container textAlign='center'>
                        <Divider inverted section style={{
                            marginTop: '1rem', 
                            marginBottom: '1rem'
                        }}/>
                        <List horizontal inverted divided link size='small'>
                            <List.Item as='a' href='#'>
                                About Us
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Contact Us
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Terms and Conditions
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Privacy Policy
                            </List.Item>
                            <List.Item as='a' href='#'>
                            <small>&copy; Copyright 2019, dExTeR</small>
                            </List.Item>

                        </List>
                        {/* <center>Designed By: dExTeR</center> */}
                    </Container>
                </Segment>
            </div>
        )
    }
} 

function mapStateToProps(state) {
    return {
        test: state.test
    };
  }
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      getTestData
    }, dispatch)
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content))

