import { useState } from "react";


const Category = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index)
  }
    return (
      <div>
        <div className="tab-container">
          <div
            className={`tab ${activeTab === 0 ? 'active' : ''}`}
            onClick={() => handleTabClick(0)}
          >
            Category 1
          </div>
          <div
            className={`tab ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => handleTabClick(1)}
          >
            Category 2
          </div>
          <div
            className={`tab ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => handleTabClick(2)}
          >
            Category 3
          </div>
        </div>

        <div className="content-container">
          {activeTab === 0 && <div>Subcategory 1 content</div>}
          {activeTab === 1 && <div>Subcategory 2 content</div>}
          {activeTab === 2 && <div>Subcategory 3 content</div>}
        </div>
      </div>

    );
  };

export default Category;

