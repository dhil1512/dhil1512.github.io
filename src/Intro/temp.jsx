<div className="intro-container container mt-3">
{/* Buttons acting as tabs */}
<button
  className={`btn ${activeTab === 'tab1' ? 'btn-primary' : 'btn-outline-primary'} m-2`}
  onClick={() => handleTabClick('tab1')}
>
  Tab 1
</button>
<button
  className={`btn ${activeTab === 'tab2' ? 'btn-primary' : 'btn-outline-primary'} m-2`}
  onClick={() => handleTabClick('tab2')}
>
  Tab 2
</button>

{/* Conditional rendering of content based on active tab */}
<div className="mt-4">
  {activeTab === 'tab1' && <p>This is the content for Tab 1. You can put any content here!</p>}
  {activeTab === 'tab2' && <p>This is the content for Tab 2. You can change this to whatever you like!</p>}
</div>
</div>