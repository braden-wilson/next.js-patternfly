import {
    Brand,
    Divider,
    Flex,
    FlexItem,
    Grid,
    GridItem
  } from '@patternfly/react-core';
  
  import devfileLogo from '../../public/images/devfileLogo.svg';

const LeadBanner1 = (
    <Grid>
      <GridItem span={6}>
        <ul>
          <li>
            <Flex alignItems={{default: 'alignItemsCenter'}}>
              <FlexItem>
                <Brand
                  src={devfileLogo}
                  alt="Devfile Logo"
                  style={{height: '5rem'}}
                />
              </FlexItem>
              <FlexItem style={{fontSize: '2.5rem'}}>
                devfiles
              </FlexItem>
            </Flex>
          </li>
          <br/>
          <Divider component="li" inset={{default: 'insetLg'}}/>
          <br/>
          <li style={{textAlign: 'center'}}>
            A standard to simplify and accelerate cloud-native development through best practice workflows.
            {/* Accelerate developer workflows and enforce consistent standards. */}
          </li>
        </ul>
      </GridItem>
      <GridItem span={6}>
        <span style={{fontSize: '1.5rem'}}>Why Devfiles?</span>
        <br/>
        <br/>
        Devfiles let you codify best practices for your application development lifecycle, making it easy to share and promote consistency across development teams and projects. Containerized runtimes, frameworks and tools can be pre-configured by experts in those communities, alleviating the need for every developer to have knowledge in those areas.
      </GridItem>
    </Grid>
  );

export default LeadBanner1;