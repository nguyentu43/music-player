import { ChakraBox } from "./BaseItems";

export default function Rotate({play = true, ...props}){
    
    const variants = {
        start: {
            rotate: 360,
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop'
            }
        },
        stop: {
            rotate: 0
        }
    }
    
    return (
        <ChakraBox 
        variants={variants} 
        animate={play ? 'start' : 'stop'} 
        {...props}>
            {props.children}
        </ChakraBox>
    );
}