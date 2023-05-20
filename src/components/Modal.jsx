import { createPortal } from 'react-dom';
import { useRef } from 'react';
import { useUpdateEffect } from 'react-use';
import anime from 'animejs';

// Component
import XMarkButtonIcon from './buttons/XMarkButtonIcon';

const Modal = ({ shouldShow, children, onClickCloseModal }) => {
  const rootWrapper = useRef('');
  const bgRef = useRef('');
  const contentRef = useRef('');

  const animateModal = () => {
    if (shouldShow) {
      document.body.style.overflowY = 'hidden';
      // To make sure that elements will be animatable
      Object.assign(bgRef.current.style, {
        opacity: 0,
      });

      Object.assign(rootWrapper.current.style, {
        display: 'block',
      });

      Object.assign(contentRef.current.style, {
        opacity: 0,
        transform: 'translateY(30px)',
      });

      // Animate bg
      anime({
        targets: bgRef.current,
        opacity: 0.8,
        easing: 'easeOutCubic',
        duration: 750,
      });

      // Animate content wrapper
      anime({
        targets: contentRef.current,
        translateY: 0,
        opacity: 1,
        easing: 'easeOutCubic',
        duration: 750,
      });
    } else {
      document.body.style.overflowY = null;

      // Animate bg
      anime({
        targets: bgRef.current,
        opacity: 0,
        easing: 'easeOutCubic',
        duration: 350,
      });

      // Animate content wrapper
      anime({
        targets: contentRef.current,
        translateY: 30,
        opacity: 0,
        easing: 'easeOutCubic',
        duration: 350,
        complete: () => {
          // Reset styles to back to initial state
          bgRef.current.style = null;
          rootWrapper.current.style = null;
          contentRef.current.style = null;
        },
      });
    }
  };

  useUpdateEffect(() => {
    animateModal();
  }, [shouldShow]);

  return createPortal(
    <div
      className="fixed left-0 top-0 hidden h-screen w-screen"
      ref={rootWrapper}
    >
      <span
        className="absolute left-0 top-0 block h-screen w-full bg-primary-900 opacity-0"
        ref={bgRef}
      ></span>
      <div className="absolute flex h-screen w-full items-center justify-center overflow-y-scroll">
        <div
          className="relative my-auto rounded-lg bg-white p-4"
          ref={contentRef}
        >
          <XMarkButtonIcon onClick={onClickCloseModal} />
          <div>{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
