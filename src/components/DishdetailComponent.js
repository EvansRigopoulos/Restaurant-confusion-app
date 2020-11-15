import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';



    
      
        
        function RenderDish({dish}){
            if(dish!=null){
                return(
                    <Card>
                          <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>
                                {dish.description}
                            </CardText>
                            </CardBody>
                    </Card>
                );
            }else return (
            <div></div>
            );
        }
      
        function RenderComments({dish}){
            
            if(dish!=null ){
               
                
               return   (dish.comments.map((comment) => { 
                 
              
                            
                        return (
              
                      
                           <CardTitle>
                        <div key={comment.id} >
                    
                            <CardText>
                        <ul className = "list-unstyled">
                         <li><p>{comment.comment}</p><br></br>
                            <p>--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
                        </li>
                     </ul>
                     </CardText>
                  </div>
                  </CardTitle>
                  
                        );
                     
                   }
                )
               );  
                }else 
                return <div></div>
            
        }  
              

            
        
        
        const  DishDetail = (props) => {
            return(
        <div className = "container">
            <div className ="row">
                <div className = "col-12 col-md-5 m-1">
                    <RenderDish dish = {props.dish} />
                </div>
                <div className = "col-12 col-md-5 m-1">
                    <h4 ><strong>Comments</strong></h4>
                    <RenderComments dish= {props.dish} />
                </div>
            </div>
        </div>
            ) ;   
    }
export default  DishDetail;




        
     



