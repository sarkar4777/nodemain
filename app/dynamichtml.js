
module.exports = {
	adminNavTemplate : function() { return '<ul class="sidebar-menu"> \
                        <li class="$dashboard$"> \
                            <a href="/dashboard"> \
                                <i class="fa fa-dashboard"></i> <span>Dashboard</span> \
                            </a> \
                        </li> \
                        <li class="treeview $campaign$"> \
                            <a href="#"> \
                                <i class="fa fa-th"></i> \
                                <span>Campaign Details</span> \
                                <i class="fa fa-angle-left pull-right"></i> \
                            </a> \
                            <ul class="treeview-menu"> \
                                <li class="$campaignlist$"><a href="/campaignlist"><i class="fa fa-angle-double-right"></i> Campaigns</a></li> \
                                <li class="$campaigncreate$"><a href="/campaigncreate"><i class="fa fa-angle-double-right"></i> Create Campaign</a></li> \
                                <li class="$creatives$"><a href="/creatives"><i class="fa fa-angle-double-right"></i> Creatives</a></li> \
                                <li class="$creativesupload$"><a href="/creativesupload"><i class="fa fa-angle-double-right"></i> Upload Creatives</a></li> \
                                <li class="$trackers$"><a href="/trackers"><i class="fa fa-angle-double-right"></i> Trackers</a></li> \
                            </ul> \
                        </li> \
                        <li class="$users$"> \
                            <a href="/users"> \
                                <i class="fa fa-th"></i> <span>User Management</span> \
                            </a> \
                        </li> \
                        <li class="$email$"> \
                            <a href="/mail"> \
                                <i class="fa fa-envelope"></i> <span>Mail / Messages</span> \
                            </a> \
                        </li> \
						</ul>';
					},
						
   advertiserNavTemplate : function(){ return '<ul class="sidebar-menu"> \
                        <li class="$dashboard$"> \
                            <a href="/dashboard"> \
                                <i class="fa fa-dashboard"></i> <span>Dashboard</span> \
                            </a> \
                        </li> \
                        <li class="treeview $campaign$"> \
                            <a href="#"> \
                                <i class="fa fa-th"></i> \
                                <span>Campaign Details</span> \
                                <i class="fa fa-angle-left pull-right"></i> \
                            </a> \
                            <ul class="treeview-menu"> \
                                <li class="$campaignlist$"><a href="/campaignlist"><i class="fa fa-angle-double-right"></i> Campaigns</a></li> \
                                <li class="$campaigncreate$"><a href="/campaigncreate"><i class="fa fa-angle-double-right"></i> Create Campaign</a></li> \
                                <li class="$creatives$"><a href="/creatives"><i class="fa fa-angle-double-right"></i> Creatives</a></li> \
                                <li class="$creativesupload$"><a href="/creativesupload"><i class="fa fa-angle-double-right"></i> Upload Creatives</a></li> \
                                <li class="$trackers$"><a href="/trackers"><i class="fa fa-angle-double-right"></i> Trackers</a></li> \
                            </ul> \
                        </li> \
                        <li class="$users$"> \
                            <a href="/users"> \
                                <i class="fa fa-th"></i> <span>User Management</span> \
                            </a> \
                        </li> \
                        <li class="$email$"> \
                            <a href="/mail"> \
                                <i class="fa fa-envelope"></i> <span>Mail / Messages</span> \
                            </a> \
                        </li> \
						</ul>';
					},
						
   affiliateNavTemplate : function() { return '<ul class="sidebar-menu"> \
                        <li class="$dashboard$"> \
                            <a href="/dashboard"> \
                                <i class="fa fa-dashboard"></i> <span>Dashboard</span> \
                            </a> \
                        </li> \
                        <li class="treeview $campaign$"> \
                            <a href="#"> \
                                <i class="fa fa-th"></i> \
                                <span>Campaign Details</span> \
                                <i class="fa fa-angle-left pull-right"></i> \
                            </a> \
                            <ul class="treeview-menu"> \
                                <li class="$campaignlist$"><a href="/campaignlist"><i class="fa fa-angle-double-right"></i> Campaigns</a></li> \
                                <li class="$campaigncreate$"><a href="/campaigncreate"><i class="fa fa-angle-double-right"></i> Create Campaign</a></li> \
                                <li class="$creatives$"><a href="/creatives"><i class="fa fa-angle-double-right"></i> Creatives</a></li> \
                                <li class="$creativesupload$"><a href="/creativesupload"><i class="fa fa-angle-double-right"></i> Upload Creatives</a></li> \
                                <li class="$trackers$"><a href="/trackers"><i class="fa fa-angle-double-right"></i> Trackers</a></li> \
                            </ul> \
                        </li> \
                        <li class="$users$"> \
                            <a href="/users"> \
                                <i class="fa fa-th"></i> <span>User Management</span> \
                            </a> \
                        </li> \
                        <li class="$email$"> \
                            <a href="/mail"> \
                                <i class="fa fa-envelope"></i> <span>Mail / Messages</span> \
                            </a> \
                        </li> \
						</ul>';
					},
topStatus : function() { return '<li class="dropdown user user-menu"> \
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"> \
                                <i class="glyphicon glyphicon-user"></i> \
                                <span>$fullname$ <i class="caret"></i></span> \
                            </a> \
                            <ul class="dropdown-menu"> \
                                <!-- User image --> \
                                <li class="user-header bg-light-blue" style="height:70px !important;"> \
                                        $fullname$ - $userrole$ <br>\
                                        <small>Member since $date$</small> \
                                </li> \
                                <!-- Menu Footer--> \
                                <li class="user-footer"> \
                                    <div class="pull-left"> \
                                        <a href="/useredit?id=$id$" class="btn btn-default btn-flat">Profile</a> \
                                    </div> \
                                    <div class="pull-right"> \
                                        <a href="/logout" class="btn btn-default btn-flat">Sign out</a> \
                                    </div> \
                                </li> \
                            </ul> \
                        </li>'; 
                    }					
	
};
