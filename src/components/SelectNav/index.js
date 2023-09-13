import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from '@docusaurus/router';
import styles from './styles.module.css';
import versionsList from '@site/versions.json'

export default function SelectNav({ label, items }) {
  let history = useHistory();
  let pathname = useLocation().pathname;
  let dongtai = pathname.startsWith('/doc/')
  let cur = pathname.replace(dongtai ? '/dongtai_doc/docs/' : '/docs/', '').split('/')[0]
  let flag = cur === 'next' || versionsList.includes(cur)
  let pagePath = flag ? pathname.replace(dongtai ? `/dongtai_doc/docs/${cur}` : `/docs/${cur}`, '') : pathname.replace(dongtai ? '/dongtai_doc/docs' : '/docs', '')
  console.log('----', pathname, pagePath)
  const [selectedOption, setSelectedOption] = flag ? useState(cur === 'next' ? 'Next' : cur) : useState(items[1].label);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = item => {
    setSelectedOption(item.label)
    let toPage = item.docs?.find(ele => ele.path.replace(item.path, '') === pagePath )
    console.log('topage', toPage, item)
    if (!toPage) {
      history.push(`${item.path}/introduction`)
      return
    }
    history.push(toPage.path)
  }

  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (event) => {
      let flag = dropdownRef.current.contains(event.target);
      !flag && setShowDropdown(false);
    };
    if (showDropdown) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [showDropdown]);
  
  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles.dropdown_button} onMouseEnter={() => setShowDropdown(true)}>{selectedOption}</div>
      {showDropdown && (<div className={styles.dropdown_content}>
        {items.map((option, index) => (
          <div className={`${styles.dropdown_link} ${selectedOption == option.label ? styles['dropdown_link--active'] : ''}`} key={index} onClick={() => handleClick(option)}>
            {option.label}
          </div>
        ))}
      </div>)}
    </div>
  )
}